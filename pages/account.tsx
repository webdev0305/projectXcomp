import { useState, useCallback, useRef, useEffect } from 'react'
import styles from "styles/pages/Account.module.scss"; // Page styles
import classNames from 'classnames';
import Link from 'next/link';
import { IUser, token } from 'state/competition';
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { eth } from 'state/eth';
import DefaultErrorPage from 'next/error'
import Router from 'next/router';

export default function EditAccount() {
    const { address } = eth.useContainer()
    const { user, setUser } = token.useContainer()
    const [loading, setLoading] = useState(false)
    const [avatar, setAvatar] = useState<string>()
    const [account, setAccount] = useState<IUser>({})
    const hiddenFileInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setAccount({ ...user })
    }, [user])
    useEffect(() => {
        if (!address)
            Router.push('/')
    }, [address])
    const onFileChange = async (e: any) => {
        const file = e?.target?.files[0]
        try {
            new Promise(resolve => {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    const baseURL = reader.result
                    resolve(baseURL);
                }
            }).then(result => {
                setAvatar(String(result))
            })
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }
    const handleChange = (e: any) => {
        const field = e.target.name
        const value = e.target.value
        setAccount({
            ...account, [field]: value
        })
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
    const save = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        if (avatar) {
            const res = await uploadData([{ path: 'avatar', content: avatar }])
            account.avatar = res.data[0].path
        }
        axios.post('/api/account', {
            id: account.id,
            first_name: account.firstName,
            last_name: account.lastName,
            email: account.email,
            phone1: account.phone1,
            phone2: account.phone2,
            address: account.address,
            avatar_url: account.avatar
        }).then(res => {
            toast.success('Saved Successfully')
            setUser({ ...account, nickName: (account.firstName || account.lastName ? `${account.firstName} ${account.lastName}` : `0x${account.id?.substring(2, 6)}...${account.id?.slice(-4)}`) })
        }).finally(() => setLoading(false))
    }
    return address ? (
        <div className={classNames(styles.container, loading && styles.loading, "bg-white")}>
            <div className="container md:w-96">
                <form onSubmit={save}>
                    <input
                        className="hidden"
                        type="file"
                        ref={hiddenFileInput}
                        accept="image/png, image/gif, image/jpeg"
                        onChange={onFileChange}
                    />
                    <div className={styles.avatar}>
                        <div><Image src={(avatar ?? user.avatar) ?? '/avatar.png'} alt="Avatar" width={150} height={150} /></div>
                        <Link href="/account" passHref><button title="Change Image" onClick={() => hiddenFileInput?.current?.click()} /></Link>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='md:w-1/3 pr-4'>First Name</label>
                        <div className="w-full md:w-2/3">
                            <input name="firstName" className='border-2 rounded-xl p-1 w-full' value={account.firstName ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='md:w-1/3 pr-4'>Last Name</label>
                        <div className="w-full md:w-2/3">
                            <input name="lastName" className='border-2 rounded-xl p-1 w-full' value={account.lastName ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='md:w-1/3 pr-4'>Email</label>
                        <div className="w-full md:w-2/3">
                            <input name="email" className='border-2 rounded-xl p-1 w-full' value={account.email ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='md:w-1/3 pr-4'>Phones</label>
                        <div className="w-full md:w-2/3">
                            <input name="phone1" className='border-2 rounded-xl p-1 w-full' value={account.phone1 ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-1">
                        <label className='md:w-1/3 pr-4' />
                        <div className="w-full md:w-2/3">
                            <input name="phone1" className='border-2 rounded-xl p-1 w-full' value={account.phone2 ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <label className='md:w-1/3 pr-4'>Address</label>
                        <div className="w-full md:w-2/3">
                            <textarea name="address" className='border-2 rounded-xl p-1 w-full' rows={2} value={account.address ?? ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="px-4 py-2 my-4 w-full md:w-2/3 flex-shrink font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : <DefaultErrorPage statusCode={404} />
}
