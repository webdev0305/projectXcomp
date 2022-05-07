import { useState, useRef, useEffect } from 'react'
// import { eth } from "state/eth" // Global state: ETH
import { token, ICompetition } from "state/competition" // Global state: Tokens
import { BigNumber } from "bignumber.js"
import base64 from 'base-64'
import axios from 'axios'
import styles from "styles/pages/Admin.module.scss" // Page styles
import cn from "classnames"
import Router, { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Link from 'next/link'

interface ImageInfo {
    path: string
    content: string
}

export default function PublishCompetitionPage() {
    const router = useRouter()
    const { id } = router.query
    const {
        dataLoading,
        competitions,
        createNewCompetition,
        updateCompetition
    }: {
        dataLoading: boolean;
        competitions: ICompetition[];
        createNewCompetition: Function;
        updateCompetition: Function;
    } = token.useContainer();
    const [competition, setCompetition] = useState<ICompetition>({})
    const [images, setImages] = useState<ImageInfo[]>([])
    const [submitting, setSubmitting] = useState(false)

    const getBase64 = (file: File) => {
        return new Promise(resolve => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                const baseURL = reader.result
                resolve(baseURL);
            }
        })
    }

    const onFileChange = async (e: any) => {
        const file = e?.target?.files[0]
        try {
            getBase64(file).then(result => {
                setImages(images => {
                    return [...images, { "path": 'competition/' + (new Date().getTime()), "content": String(result) }]
                })
            })
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }
    const onImageCancel = (index: number) => {
        images.splice(index, 1)
        setImages(images => {
            return [...images]
        })
    }
    const onImageRemove = (index: number) => {
        competition.images?.splice(index, 1)
        setCompetition({ ...competition })
    }

    const uploadData = async (data: any) => {
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
        return await axios.post('https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', data, config);
    }

    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (hiddenFileInput && hiddenFileInput.current)
            hiddenFileInput.current.click();
    }
    const handleChange = (e: any) => {
        const field = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setCompetition({
            ...competition, [field]: value
        })
    }
    const submitContact = async (event: any) => {
        event.preventDefault();
        setSubmitting(true)
        if (images.length) {
            const res1 = await uploadData(images)
            const imgs = competition.images ?? []
            for (const r of res1.data) {
                imgs.push(r.path)
            }
            competition.images = imgs
        }
        competition.timeUpdated = new Date()
        const formData = [{
            path: 'competition.json',
            content: base64.encode(JSON.stringify(competition))
        }]
        const res2 = await uploadData(formData)
        if (res2) {
            const path = res2.data[0].path
            try {
                if ((competition.id ?? 0) > 0) {
                    await updateCompetition(
                        competition.id,
                        competition.countTotal,
                        competition.forGuest ? new BigNumber(competition.priceForGuest ?? 0).shiftedBy(18).toString() : -1,
                        competition.forMember ? new BigNumber(competition.priceForMember ?? 0).shiftedBy(18).toString() : -1,
                        competition.maxPerPerson,
                        path
                    )
                    toast.success('Updated successfully!')
                } else {
                    await createNewCompetition(
                        competition.countTotal,
                        competition.forGuest ? new BigNumber(competition.priceForGuest ?? 0).shiftedBy(18).toString() : -1,
                        competition.forMember ? new BigNumber(competition.priceForMember ?? 0).shiftedBy(18).toString() : -1,
                        competition.maxPerPerson,
                        path
                    )
                    // if (competitions.length > 0 && competitions[competitions.length - 1].id)
                    //     editCompetition(competitions[competitions.length - 1].id ?? 0)
                    toast.success('Created successfully!')
                    setCompetition({})
                }
            } catch (ex: any) {
                console.log(ex)
                if (typeof ex == 'object')
                    toast.error(`Error! ${(ex.data?.message ?? null) ? ex.data.message.replace('execution reverted: ', '') : ex.message}`)
                else
                    toast.error(`Error! ${ex}`)
            }
            setImages([])
        }
        setSubmitting(false)
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
    return (
        <div className={cn(styles.container, styles.publish, submitting && styles.submitting)}>
            <div className="container">
                <form onSubmit={submitContact} style={{ width: 'auto' }}>
                    <input type="hidden" name="id" value={competition.id ?? 0} />
                    <h2 className='mt-2 font-bold uppercase text-center text-2xl'>{competition.title}</h2>
                    <p className="text-center">{competition.description}</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        {competition.forGuest &&
                            <div className={styles.price}>
                                <label>Ticket Price</label>
                                <h5 className='text-blue-600 font-bold'>{competition.priceForGuest}</h5>
                            </div>
                        }
                        {competition.forMember &&
                            <div className={styles.price}>
                                <label>XClub member Price</label>
                                <h5 className='text-red-600 font-bold'>{competition.priceForMember}</h5>
                            </div>
                        }
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end pr-4'>Winning Prize Type</label>
                        <div className="md:w-2/3">
                            <select name="prize_type" className='mr-2 border-2 rounded-xl p-2 w-full'>
                                <option value="goods">Goods</option>
                                <option value="cash">Cash</option>
                                <option value="token">Token</option>
                                {competition.forMember && !competition.forGuest && <option value="credit">Credit</option>}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='mt-2 md:w-1/3 md:flex md:justify-end pr-4'>Token for prize</label>
                        <div className="md:w-2/3">
                            <select name="token" className='mr-2 border-2 rounded-xl p-2 w-full'>
                                <option value="0x0000000000000000000000000000000000000000">$PXT</option>
                                <option value="0x0000000000000000000000000000000000000000">AVAX</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='mt-2 md:w-1/3 md:flex md:justify-end pr-4'>Goods for prize</label>
                        <div className="md:w-2/3">
                            <input name="name" className='mr-2 border-2 rounded-xl p-1 w-full' />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='mt-2 md:w-1/3 md:flex md:justify-end pr-4'>Amount for prize</label>
                        <div className="md:w-2/3">
                            <input name="amount" type="number" className='mr-2 border-2 rounded-xl p-1 w-full' />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end pr-4'>Will draw at</label>
                        <div className="md:w-2/3">
                            <input type="datetime-local" name="timeEnd" className='mr-2 border-2 rounded-xl p-1' />
                        </div>
                    </div>
                    <div className='flex max-w-sm justify-center gap-1' style={{ margin: 'auto' }}>
                        <button
                            disabled={submitting}
                            type="submit"
                            className="px-4 py-2 my-4 flex-grow font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                        >
                            {submitting ? 'Publishing...' : 'Publish'}
                        </button>
                        {' '}
                        <Link href="/list" passHref>
                            <button
                                disabled={submitting}
                                className="px-4 py-2 my-4 flex-grow font-bold text-white bg-gray-500 rounded-lg hover:bg-gray-700"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
