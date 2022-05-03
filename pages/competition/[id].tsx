import { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
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
    competition.images?.map(item => {
      items.push({
        original: item
      })
    })
    setItems(items)
    // if (document && document.querySelector("img.logo"))
    // document.querySelector("img.logo").style.visibility = 'visible'
  }, [competition])
  const promissHour = competition.timeEnd??new Date();
  const nowHour = new Date();
  var diff = Math.abs(promissHour?.getTime() - nowHour.getTime());
  var diffHours = Math.ceil(diff / (1000 * 3600));
  var diffMins = Math.ceil(diff / (1000 * 60));
  return competition && (
    <div className={classNames(styles.competition, buying && styles.loading)}>
      <div className={styles.inner_hero_section}>
        <div className={styles.bg_shape}>
          <img src={competition.winnerImage} alt={competition.title} width="100%" height="auto" className= {styles.imageSize}/>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.col_6}>
                <div className={styles.clock_wrapper}>
                  <div className={styles.mb_2}>
                  
                    This competition ends in <Counter className="mt-4" endTime={competition.timeEnd ?? new Date()} drawDate={formatDate(competition.timeEnd)} />
                  </div>
                  <div className={styles.clock}>
                  </div>
                </div>
              </div>
              <div className={styles.col_12}>
                <div className={styles.contest_cart}>
                  <div className={styles.contest_cart_left}>
                      <div className={styles.contest_cart_slider_area}>
                        <div className={styles.contest_cart_thumb_slider}>
                          <div className={styles.single_slide}>
                            <img src={competition.logoImage} alt={competition.title}  className={styles.logoImage} />
                          </div>
                         </div>
                      </div>
                  </div>
                  <div className={styles.contest_cart_right}>
                    <h3 className={styles.contest_name}>{competition.title}</h3>
                    <div className={styles.contest_num}>Competition: <span>{competition.id}</span></div>
                    <h4>Tickets sold</h4>
                    <div className={styles.ticket_amount}>
                      <Progress
                        maxAmount={competition.countTotal ?? 0}
                        leftAmount={(competition.countTotal ?? 0) - (competition.countSold ?? 0)}
                        limitedAmount={competition.maxPerPerson ?? 0}
                      />
                    </div>
                    <div className={styles.ticket_price}>
                      <span className={styles.amount}>{user.isMember ? competition.priceForMember : competition.priceForGuest} $PXT</span>
                      <small>Per ticket</small>
                    </div>
                    <div className={styles.column1}>
                      <div className={styles.column2}><a href="#0" onClick={buy} className={styles.style_three}>{buying ? (user.approved ? "Buying..." : "Approving...") : "Buy ticket"}</a></div>
                    </div>
                    <ul className={styles.social_links}>
                      <li>Share :</li>
                      <li><a href="#0"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#0"><i className="fab fa-discord"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.col_10}>
                <div className={styles.contest_description}>
                  <div className={styles.content_block}>
                    <h3 className={styles.title}>Prize details</h3>
                    <p>{competition.description}</p>
                  </div>
               </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
