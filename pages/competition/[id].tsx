import { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import cn from 'classnames'
import Progress from 'components/Progress'
import Counter from 'components/Counter'
import styles from "styles/pages/Buy.module.scss" // Page styles
import { useRouter } from 'next/router'
import { ICompetition, token } from 'state/competition'
import { toast } from 'react-toastify'
import classNames from 'classnames'
import Hero from 'components/Hero'
import Image from 'next/image'

export default function Competition() {
  const [dDisplay, setDDisplay] = useState<string>()
  const [hDisplay, setHDisplay] = useState<string>()
  const [mDisplay, setMDisplay] = useState<string>()
  const [sDisplay, setSDisplay] = useState<string>()
  const [tickets, setTicket] = useState(1)
  const [buying, setBuying] = useState(false)
  const [items, setItems] = useState<any[]>([])
  const [timeout, setTimedout] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const {
    dataLoading, competitions, user, buyTicket
  } = token.useContainer()
  const [competition, setCompetition] = useState<ICompetition>({})

  const removeTicket = () => {
    if (tickets > 1)
      setTicket(tickets - 1)
  }
  const addTicket = () => {
    if (tickets < (competition.maxPerPerson ?? 0))
      setTicket(tickets + 1)
  }
  const formatDate = (date: Date | undefined) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(date)
  }
  function secondsToHms(t: number) {
    const ac = new AbortController()
    if (t <= 0) {
      setDDisplay('0')
      setHDisplay('00')
      setMDisplay('00')
      setSDisplay('00')
    } else {
      const d = Math.floor(t / 86400);
      const h = Math.floor(t % 86400 / 3600);
      const m = Math.floor(t % 3600 / 60);
      const s = Math.floor(t % 3600 % 60);

      setDDisplay(d.toString());
      setHDisplay(h < 10 ? h.toString().padStart(2, "0") : h.toString());
      setMDisplay(m < 10 ? m.toString().padStart(2, "0") : m.toString());
      setSDisplay(s < 10 ? s.toString().padStart(2, "0") : s.toString());
    }
    ac.abort()
  }
  const buy = async () => {
    setBuying(true)
    try {
      const item = await buyTicket(competition, tickets)
      competition.countSold = item.countSold
      toast.success(`Bought ${tickets} tickets successfully!`)
    } catch (ex: any) {
      if (typeof ex == 'object')
        toast.error(`Error! ${(ex.data?.message ?? null) ? ex.data.message.replace('execution reverted: ', '') : ex.message}`)
      else
        toast.error(`Error! ${ex}`)
    }
    setBuying(false)
  }
  useEffect(() => {
    const index = Number(id)
    for (const comp of competitions) {
      if (index == comp.id) {
        setCompetition(comp)
        break
      }
    }
  }, [id, dataLoading, competitions])
  useEffect(() => {
    // competition.images?.reduce((arr, el) => ([...arr, { original: el }]), [])
    const items: any[] = []
    competition.images?.map((item: any) => {
      items.push({
        original: item
      })
    })
    setItems(items)
    // if (document && document.querySelector("img.logo"))
    // document.querySelector("img.logo").style.visibility = 'visible'
  }, [competition])
  const promissHour = competition.timeEnd ?? new Date();
  const nowHour = new Date();
  var diff = Math.abs(promissHour?.getTime() - nowHour.getTime());
  var diffHours = Math.ceil(diff / (1000 * 3600));
  var diffMins = Math.ceil(diff / (1000 * 60));
  return competition && (
    <div className={classNames(styles.competition, buying && styles.loading)}>
      <div className="page-wrapper">
        <div className="inner-hero-section">
          <div className="bg-shape"><img src="assets/images/elements/inner-hero-shape.png" alt="image"/></div>
        </div>
        <section className="pb-120 mt-minus-300">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="clock-wrapper">
                  <div className="mb-2" style ={{color: "white", fontSize: "18px"}}>
                    This competition ends in <Counter className="mt-4" endTime={competition.timeEnd ?? new Date()} drawDate={formatDate(competition.timeEnd)} />
                  </div>
                  <div className="clock" data-clock="2020/12/10"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contest-cart">
                  <div className="contest-cart__left">
                    <div className="contest-cart__slider-area">
                      <div className="contest-cart__thumb-slider">
                        <div className="single-slide">
                          <img src={competition.logoImage} alt={competition.title}  style = {{ width: "80%", margin: "auto"}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contest-cart__right">
                    <h3 className="contest-name">{competition.title}</h3>
                    <div className="contest-num">Comp ID: <span>{competition.id}</span></div>
                    <h4>{competition.countSold ?? 0} Tickets sold</h4>
                    <div className="ticket-amount">
                      <Progress
                        maxAmount={competition.countTotal ?? 0}
                        leftAmount={(competition.countTotal ?? 0) - (competition.countSold ?? 0)}
                        limitedAmount={competition.maxPerPerson ?? 0}
                      />
                    </div>
                    <div className="ticket-price">
                      <span className="amount">{user.isMember ? competition.priceForMember : competition.priceForGuest} $PXT</span>
                      <small>Per ticket</small>
                    </div>
                    <div className="d-flex flex-wrap align-items-center mb-30">
                      <div className={cn(styles.input, "mr-[20px]")}>
                        <button onClick={removeTicket}>-</button>
                        <input type="text" name="tickets_num" value={tickets} onChange={e => setTicket(Number(e.target.value))} />
                        <button onClick={addTicket}>+</button>
                      </div>
                      <div className="mt-sm-0 mt-3"><a href="#0" onClick={buy} className="cmn-btn style--three">{buying ? (user.approved ? "Buying..." : "Approving...") : "Buy ticket"}</a></div>
                    </div>
                    <ul className="social-links align-items-center">
                      <li>Share :</li>
                      <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#0"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="contest-description">
                  <div className="content-block">
                    <h3 className="title">Prize details</h3>
                    <p>{competition.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
