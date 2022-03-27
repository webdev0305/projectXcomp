import Counter from "components/Counter"
import styles from "styles/components/CompetitionItems.module.scss"; // Page styles
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
    return (
        <div className={classNames(styles.competition, className, loading && styles.loading)}>
            {showStatus &&
                <span className={classNames(styles.status, styles['status' + item.status])}>
                    {item.status == 0 && "Ready"}
                    {item.status == 1 && (timeout ? "Timeout" : "Pending")}
                    {item.status == 2 && "Drawn"}
                    {item.status == 3 && "Complete"}
                </span>
            }
            <Link href={href} passHref>
                <h2 className="tracking-normal">
                    {item.title}
                </h2>
            </Link>
            <div className={classNames(item.countTotal == item.countSold && styles.soldout, "mt-2")}>
                {item.status === 2 && item.winnerImage &&
                    <Link href={href} passHref>
                        <img src={item.winnerImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
                {item.status !== 2 && item.logoImage &&
                    <Link href={href} passHref>
                        <img src={item.logoImage} alt={item.title} width="100%" height="auto" className="rounded-md" />
                    </Link>}
            </div>
            <div className="flex flex-wrap justify-between my-2 gap-4">
                <div className="flex-1">
                    <table style={{ height: "100%" }}>
                        <tbody>
                            <tr>
                                <td className="text-sm">Ticket Price</td>
                                <td align="right" className="font-bold text-blue-700">{item.priceForGuest} $PXT</td>
                            </tr>
                            <tr>
                                <td className="text-sm">Member Price</td>
                                <td align="right" className="font-bold text-red-700">{item.priceForMember} $PXT</td>
                            </tr>
                            <tr>
                                <td className="text-sm">Count of tickets</td>
                                <td align="right" className="font-bold text-cyan-700">{item.countTotal}</td>
                            </tr>
                            <tr>
                                <td className="text-sm">Tickets sold</td>
                                <td align="right" className="font-bold text-red-700">{item.countSold}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-1/3">
                    <CircularProgressbarWithChildren value={(item.countSold ?? 0) * 100 / (item.countTotal ?? 100)}>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xl text-red-700">{item.countSold}</span>
                            <small>of</small>
                            <span className="font-bold text-xl text-cyan-700">{item.countTotal}</span>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            {item.status == 1 && !timeout && <Counter className="mt-2" endTime={item.timeEnd ?? new Date()} drawDate={formatDate(item.timeEnd, 'US')} />}
            {item.status == 1 && timeout &&
                (user.isOwner ?
                    <div className="flex gap-1 mt-2">
                        <button className="flex-grow py-2 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-700" onClick={draw}>Draw</button>
                    </div> :
                    <div className="flex-grow text-center py-2 font-bold text-white bg-red-300 rounded-md">Timed out</div>
                )}
            {item.status == 0 &&
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
