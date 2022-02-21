import { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import Progress from 'components/Progress'
import Clock from 'components/Clock'
import styles from "styles/pages/Buy.module.scss" // Page styles
import { useRouter } from 'next/router'
import { ICompetition, token } from 'state/competition'
import { toast } from 'react-toastify'
import classNames from 'classnames'


export default function Competition() {
  const [tickets, setTicket] = useState(1)
  const [buying, setBuying] = useState(false)
  const [items, setItems] = useState<any[]>([])
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
  const buy = async () => {
    setBuying(true)
    try {
      await buyTicket(competition, tickets)
      toast.success(`Bought ${tickets} tickets successfully!`)
    } catch (ex) {
      console.log(ex)
      toast.error('Buy Error!')
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
  }, [competition])
  return competition && (
    <div className={classNames(styles.competition, buying && styles.loading)}>
      <ImageGallery items={items} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
      <div className='container'>
        <div className='flex flex-wrap my-10 mx-auto' style={{ maxWidth: '500px' }}>
          <Progress
            maxAmount={competition.countTotal ?? 0}
            leftAmount={(competition.countTotal ?? 0) - (competition.countSold ?? 0)}
            limitedAmount={competition.maxPerPerson ?? 0}
          />
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/2'>
            <h2 className={styles.Title}>
              {competition.title}
            </h2>
            <span className="line"></span>
            <div className="flex flex-wrap">
              {competition.forGuest &&
                <div className="mb-3 w-1/3">
                  <p className="font-bold my-1">Ticket Price</p>
                  <h5>{competition.priceForGuest}</h5>
                </div>}
              {competition.forMember && <div className="mb-3 w-1/3">
                <p className="font-bold my-1">XClub member Price</p>
                <h5><span style={{ color: "red" }}>{competition.priceForMember}</span></h5>
              </div>}
            </div>
            <div>{competition.description}</div>
          </div>
          <div className='w-full md:w-1/2 md:max-w-xs'>
            <Clock className="mt-2" type="black" endTime={competition.timeEnd} drawDate={formatDate(competition.timeEnd)} />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className={styles.input}>
            <label>Tickets</label>
            <span onClick={removeTicket}>-</span>
            <input type="text" name="tickets_num" value={tickets} onChange={e => setTicket(Number(e.target.value))} />
            <span onClick={addTicket}>+</span>
            <div>
              <button onClick={buy}>{buying ? (user.approved ? "Buying..." : "Approving...") : "Buy"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
