import styles from "../styles/components/CompetitionItems.module.scss"; // Page styles
import Link, { LinkProps } from "next/link"
import { ICompetition, token } from "state/competition";
import classNames from "classnames";
import {useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"

interface Prop extends LinkProps {
    showStatus: boolean
    item: ICompetition
    className?: string | string[]
}

export default function CompetitionItem({ href, className, item, showStatus }: Prop) {
    const { user, startCompetition, finishCompetition,signMessage } = token.useContainer()
    const [loading, setLoading] = useState(false)
    const [timeout, setTimedout] = useState(false)
    const [showPublish, setShowPublish] = useState(false)
    const dateEnd = useRef<HTMLInputElement>(null)
    const [competition, setCompetition] = useState<ICompetition>(item)
    const [prizeInstruction, setPrizeInstruction] = useState('')
    const [openPrizeEdit, setOpenPrizeEdit] = useState(false)
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

    const handleChange = (e: any) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setPrizeInstruction(value)
    }
    const openPrizeEditBox = async()=>{
        const signature = await signMessage(`competition${item.id}`)
        console.log(item.id,signature,`competition${item.id}`)
        setLoading(true)
        try {
            axios.post(`/api/competition/instruction`,{id:item.id, signature:signature, msg:`competition${item.id}`}).then(res => {
                setLoading(false), 
                setOpenPrizeEdit(true)
                setPrizeInstruction(res.data.data)
            }).finally()
        } catch (ex: any) {
            toast.error(`Error! ${ex}`)
            setLoading(false)
        }

    }
    const handleUploadInstruction = () => {
        
        setLoading(true)
        try {
            axios.post(`/api/competition/update`, { instruction: prizeInstruction, id: item.id }).then(res => {
                if (res.data.success)
                    toast.success('Updated successfully!')
            }).finally(() => {setLoading(false), setOpenPrizeEdit(false)})
        } catch (ex: any) {
            
            if (typeof ex == 'object')
                toast.error(`Error! ${(ex.data?.message ?? null) ? ex.data.message.replace('execution reverted: ', '') : ex.message}`)
            else
                toast.error(`Error! ${ex}`)
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
    const endTime = item.timeEnd?item.timeEnd.getTime():0;
    // const startTime = item.timeStart?item.timeStart.getTime():0;
    const startTime = item.timeStart?new Date().getTime():0;
    const diff = Math.abs(endTime - startTime);
    const diffDays = !timeout?Math.ceil(diff / (1000 * 3600*24)):0;
    const diffHours = !timeout?Math.ceil(diff / (1000 * 3600)):0;
    const diffMins = !timeout?Math.ceil(diff / (1000 * 60)):0;
    return (
        <div className="contest-card">
            {showStatus &&
                <span className={classNames(styles.status, styles['status' + item.status],"absolute bg-[red] text-white px-[10px] w-auto z-10 right-0")} style={{borderRadius: "0 10px"}}>
                    {item.status == 0 && "Ready"}
                    {item.status == 1 && (timeout ? "Timeout" : "Pending")}
                    {item.status == 2 && "Drawn"}
                    {item.status == 3 && "Complete"}
                </span>
            }
            <div className="contest-card__thumb h-[275px]">
                {item.status === 2 && item.logoImage &&
                    <Link href={href} passHref>
                        <img src={item.logoImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
                {item.status !== 2 && item.logoImage &&
                    <Link href={href} passHref>
                        <img src={item.logoImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
                <div className="contest-num flex-col items-center">
                    <h6>Comp no</h6>
                    {/* <h4 className="number">{item.title}</h4> */}
                    <h4 className="number text-[22px]">{item.id}</h4>
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
                        {diffDays > 1?
                            <span>{diffDays} d</span>
                        :
                         diffHours > 1? 
                           <span>{diffHours} hrs</span>
                        :
                            <span>{diffMins} mins</span>
                        }
                        
                    </li>
                    <li>
                    <i className="las la-ticket-alt"></i>
                        <span>{(item.countTotal ?? 0) - (item.countSold ?? 0)}</span>
                    <p>Remaining</p>
                    </li>
                </ul>
            </div>
            {item.status == 1 && timeout && showStatus &&
                (user.isOwner ?
                    <div className="flex gap-1 mt-2">
                        <button className="flex-grow py-2 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-700" onClick={draw}>Draw</button>
                    </div> 
                    :
                    <div className="flex-grow text-center py-2 font-bold text-white bg-red-300 rounded-md">Timed out</div>
                )}
            {item.status == 0 && !showPublish &&
                <div className="flex gap-1 mt-2">
                    <Link href={`/edit/${item.id}`} passHref>
                        <button className="flex-grow py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700">Modify</button>
                    </Link>
                    <button className="flex-grow py-2 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-700" onClick={() => showPublishPanel(true)}>Publish</button>
                </div>}
            {
                item.status == 0 &&
                showPublish &&
                <div className={styles.publish}>
                    <div className="p-1">
                        <label className="mb-2">Competition will be drawn at:</label>
                        <input type="datetime-local" ref={dateEnd} className="border-2 rounded-md p-1 w-full" defaultValue={formatDate(item.timeEnd, 'CA') + 'T08:00'} />
                    </div>
                    <div className="flex gap-1 mt-2">
                        <button className="flex-grow py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700" onClick={publish}>{loading ? 'Publishing...' : 'Publish'}</button>
                        <button className="flex-grow py-2 font-bold text-gray bg-gray-200 rounded-md hover:bg-gray-300" onClick={() => showPublishPanel(false)}>Cancel</button>
                    </div>
                </div>
            }
            {user.isOwner && item.status == 2 &&
                <div className={classNames(styles.winner, "mt-2 m-2")}>
                    <label>Winner</label>
                    <span className="flex flex-col gap-2">
                        <div>Wallet: {item.winner?.id}</div>
                    </span>
                   
                    <textarea 
                        className="text-white p-2 mt-4" 
                        value={prizeInstruction}
                        name="instruction"
                        hidden={!openPrizeEdit}
                        rows={5}
                        onChange={handleChange}
                        required
                    />
                    {/* <button type="button" className='mt-2 py-2 font-bold rounded-md w-full cursor-pointer text-white bg-blue-500 hover:bg-blue-600' onClick={() => hiddenFileInput?.current?.click()}>{loading ? 'Uploading...' : 'Upload Winner Image'}</button> */}
                    {openPrizeEdit && <button type="button" className='my-2 py-2 font-bold rounded-md w-full cursor-pointer text-white bg-blue-500 hover:bg-blue-600' onClick={handleUploadInstruction}>{loading?'Updating...':'Update Prize Instruction'}</button>}
                    {!openPrizeEdit && <button type="button" className='my-2 py-2 font-bold rounded-md w-full cursor-pointer text-white bg-blue-500 hover:bg-blue-600' onClick={openPrizeEditBox}>{loading?'Checking...':'Edit Prize Instruction'}</button>}
                </div>}
        </div >
    );
}
