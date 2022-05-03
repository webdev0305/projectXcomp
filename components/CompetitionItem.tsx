import Counter from "components/Counter"
import styles from "../styles/components/CompetitionItems.module.scss"; // Page styles
import Progress from "components/Progress"
import Link, { LinkProps } from "next/link"
import { ICompetition, token } from "state/competition";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface Prop extends LinkProps {
    showStatus: boolean
    item: ICompetition
    className?: string | string[]
}

export default function CompetitionItem({ href, className, item, showStatus }: Prop) {
    const { user, startCompetition, finishCompetition } = token.useContainer()
    const [loading, setLoading] = useState(false)
    const [timeout, setTimedout] = useState(false)
    const [showPublish, setShowPublish] = useState(false)
    const dateEnd = useRef<HTMLInputElement>(null)
    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const formatDate = (date: Date | undefined, lang: string) => {
        if (lang == 'CA') {
            if (date === undefined) date = new Date(new Date().getTime() + 86400000 * 7)
            return new Intl.DateTimeFormat("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).format(date)
        } else {
            return new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit"
            }).format(date)
        }
    }
    const showPublishPanel = (show: boolean) => {
        setShowPublish(show)
        if (show && dateEnd && dateEnd.current)
            dateEnd.current.focus()
    }
    const handleUpload = async (e: any) => {
        const file = e?.target?.files[0]
        try {
            setLoading(true)
            new Promise(resolve => {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    const baseURL = reader.result
                    resolve(baseURL);
                }
            }).then(async result => {
                const config = {
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'X-API-Key': 'cbRh4B5ZJE8gjPoIEKkK58IAfdxuysg1sVSOMtrso1mi7tJypTt3rr7m9M9vBAhG'
                    },
                    onUploadProgress: (event: any) => {
                        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
                    },
                };
                const res = await axios.post('https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', [{
                    path: 'competition/winner', content: result
                }], config)
                const path = res.data[0].path
                axios.post('/api/competition/update', {
                    id: item.id, winner_url: path
                }).then(res => {
                    if (res.data.success) {
                        item.winnerImage = path
                        toast.success('Uploaded successfully!')
                    }
                }).finally(() => {
                    setLoading(false)
                })
            })
        } catch (error) {
            toast.error('Error uploading file')
            setLoading(false)
        }
    }
    const publish = async () => {
        setLoading(true)
        try {
            const timeEnd = new Date(String(dateEnd?.current?.value)).getTime() / 1000
            await startCompetition(item, timeEnd)
            toast.success('Published successfully!')
        } catch (e) {
            toast.error('Publish error!')
        }
        setLoading(false)
    }
    const draw = async () => {
        setLoading(true)
        try {
            const comp = await finishCompetition(item)
            const res = await axios.get(`/api/account/${comp.winner}`)
            item.winner = {
                id: comp.winner,
                firstName: res.data.first_name,
                lastName: res.data.last_name,
                nickName: res.data ? `${res.data.first_name} ${res.data.last_name}` : `0x${comp.winner.substring(2, 6)}...${comp.winner.slice(-4)}`,
                email: res.data.email,
                avatar: res.data?.avatar_url?.startsWith('https://') ? res.data.avatar_url : '/avatar.png'
            }
            item.status = comp.status
            axios.post(`/api/competition/update`, { winner: comp.winner, id: item.id }).then(res => {
                if (res.data.success)
                    toast.success('Drawn successfully!')
            }).finally(() => setLoading(false))
        } catch (ex: any) {
            if (typeof ex == 'object')
                toast.error(`Error! ${(ex.data?.message ?? null) ? ex.data.message.replace('execution reverted: ', '') : ex.message}`)
            else
                toast.error(`Error! ${ex}`)
            setLoading(false)
        }
    }
    const timer = setInterval(() => {
        if (!timeout && item.timeEnd && item.timeEnd <= new Date()) {
            setTimedout(true)
            clearInterval(timer)
        }
    }, 1000)
    const endTime = (item.timeEnd)?.getTime();
    const startTime = (item.timeStart)?.getTime();
    const diff = Math.abs(endTime - startTime);
    const diffDays = Math.ceil(diff / (1000 * 3600*24));
    const diffHours = Math.ceil(diff / (1000 * 3600));
    return (
        <div className="contest-card">
            <div className="contest-card__thumb">
                {item.status === 2 && item.winnerImage &&
                    <Link href={href} passHref>
                        <img src={item.winnerImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
                {item.status !== 2 && item.logoImage &&
                    <Link href={href} passHref>
                        <img src={item.logoImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
                <div className="contest-num">
                    <h6>Comp no:</h6>
                    {/* <h4 className="number">{item.title}</h4> */}
                    <h4 className="number">{item.id}</h4>
                </div>
            </div>
            <div className={classNames(item.countTotal == item.countSold && styles.soldout, "mt-2")}>
            </div>
            <div className="contest-card__content">
                <div className="left">
                    <h5 className="contest-card__name">
                        {item.title}
                    </h5>
                </div>
                <div className="right">
                    <span className="contest-card__price">
                        {item.priceForGuest}
                    </span>
                </div>
            </div>
            <div className="contest-card__footer">
                <ul className="contest-card__meta">
                    <li>
                    <i className="las la-clock"></i>
                        {diffDays >= 1?
                            <span>{diffDays} d</span>
                        :
                            <span>{diffHours} hrs</span>
                        }
                        
                    </li>
                    <li>
                    <i className="las la-ticket-alt"></i>
                        <span>{(item.countTotal ?? 0) - (item.countSold ?? 0)}</span>
                    <p>Remaining</p>
                    </li>
                </ul>
            </div>
            {user.isOwner && item.status == 2 &&
                <div className={classNames(styles.winner, "mt-2")}>
                    <label>Winner</label>
                    <span className="flex flex-col gap-2">
                        <div>Name: {item.winner?.nickName}</div>
                        <div>Wallet: 0x{item.winner?.id?.substring(2, 12)}...{item.winner?.id?.slice(-10)}</div>
                        {item.winner?.email && <div>Email: {item.winner?.email}</div>}
                        {item.winner?.address && <div>Address: {item.winner?.address}</div>}
                        {(item.winner?.phone1 || item.winner?.phone2) && <div>Phone: {item.winner?.phone1} {item.winner?.phone2}</div>}
                    </span>
                    <input
                        className="hidden"
                        type="file"
                        ref={hiddenFileInput}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={handleUpload}
                    />
                    <button type="button" className='mt-2 py-2 font-bold rounded-md w-full cursor-pointer text-white bg-blue-500 hover:bg-blue-600' onClick={() => hiddenFileInput?.current?.click()}>{loading ? 'Uploading...' : 'Upload Winner Image'}</button>
                </div>}
        </div >
    );
}
