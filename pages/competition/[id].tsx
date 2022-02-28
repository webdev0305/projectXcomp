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
  const buy = async () => {
    setBuying(true)
    try {
      const item = await buyTicket(competition, tickets)
      console.log(item)
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
  const timer = setInterval(() => {
    if (!timeout && competition.timeEnd && competition.timeEnd <= new Date()) {
      setTimedout(true)
      clearInterval(timer)
    }
  }, 1000)
  return competition && (
    <div className={classNames(styles.competition, buying && styles.loading)}>
      <div className={styles.hero}>
        <div className={classNames(styles.background, "flex flex-col")}>
          <div className={styles.price}>
            <label>Price</label>
            {user.isMember ? competition.priceForMember : competition.priceForGuest} $PXT
          </div>
          <div className={styles.description}>{competition.description}
            <Progress
              maxAmount={competition.countTotal ?? 0}
              leftAmount={(competition.countTotal ?? 0) - (competition.countSold ?? 0)}
              limitedAmount={competition.maxPerPerson ?? 0}
            />
          </div>
          <Counter className="mt-4" endTime={competition.timeEnd ?? new Date()} drawDate={formatDate(competition.timeEnd)} />
          {!timeout && <div className='flex items-center w-full justify-between mt-4 gap-10'>
            <div className={styles.input}>
              <button onClick={removeTicket}>-</button>
              <input type="text" name="tickets_num" value={tickets} onChange={e => setTicket(Number(e.target.value))} />
              <button onClick={addTicket}>+</button>
            </div>
            <button onClick={buy} className="bg-white hover:bg-red-500 text-black font-bold w-full py-2">{buying ? (user.approved ? "Buying..." : "Approving...") : "Buy"}</button>
          </div>}
        </div>
        <div className={styles.logo}>
          <Image src="/logo.png" layout="fill" width={650} height={703} />
        </div>
        <h1>{competition.title}</h1>
        <div className={styles.slider}>
          <ImageGallery items={items} showThumbnails={true} showFullscreenButton={false} showPlayButton={false} showNav={false} autoPlay={true} />
        </div>
      </div>
    </div>
  )
}
