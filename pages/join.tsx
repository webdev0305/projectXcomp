import { useState, useCallback, useEffect } from 'react'
import Image from "next/image"
import styles from "styles/pages/Join.module.scss"; // Page styles
import { token } from 'state/competition';
import { formatFixed } from '@ethersproject/bignumber'
import classNames from 'classnames'
import Link from 'next/link'
import { eth } from 'state/eth'
import DefaultErrorPage from 'next/error'
import Router from 'next/router';

export default function Join() {
    const { address } = eth.useContainer()
    const { user, feePerMonth, feePerYear, creditsPerMonth, payForMonth, payForYear } = token.useContainer()
    const [months, setMonths] = useState(1)
    const [years, setYears] = useState(1)
    const [loading, setLoading] = useState(false)
    const formatDate = (date?: Date, time?: boolean | false) => {
        if (date === undefined)
            return "-"
        return new Intl.DateTimeFormat("en-US", time ? {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit"
        } : {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(date)
    }
    const pay = async (mode: string) => {
        setLoading(true)
        if (mode == 'month') {
            await payForMonth(months)
        } else {
            await payForYear(years)
        }
        setLoading(false)
    }
    useEffect(() => {
        if (!address)
            Router.push('/')
    }, [address])
    return address ? (
        <div className={classNames(styles.join, loading && styles.loading)}>
            <div className="container">
                <div className='flex flex-wrap'>
                    <div className={classNames(styles.account, 'flex flex-col flex-shrink w-full md:w-1/3 gap-2')}>
                        <div className={styles.avatar}>
                            <div><Image src={user.avatar ?? '/avatar.png'} alt="avatar" width={150} height={150} /></div>
                            <Link href="/account" passHref><button /></Link>
                            <h3 className='pt-4'>{user.nickName}</h3>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2'>Join date:</label>
                            <span>
                                {formatDate(user.joinTime)}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2'>Until:</label>
                            <span>
                                {formatDate(user.untilTime)}
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2'>Total Paid:</label>
                            <span>
                                <strong>{user.totalPaid ? formatFixed(user.totalPaid, 18) : 0}</strong> $PXT
                            </span>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2' style={{ whiteSpace: 'nowrap' }}>Received Credit:</label>
                            <strong>
                                {user.creditPlus ? formatFixed(user.creditPlus ?? 0, 18) : 0}
                            </strong>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2'>Spent Credit:</label>
                            <strong>
                                {user.creditMinus ? formatFixed(user.creditMinus ?? 0, 18) : 0}
                            </strong>
                        </div>
                        <div className='flex justify-between'>
                            <label className='w-1/2'>Balance of Credit:</label>
                            <strong>
                                {user.creditBalance ? formatFixed(user.creditBalance ?? 0, 18) : 0}
                            </strong>
                        </div>
                    </div>
                    <div className='flex-shrink w-full md:w-2/3 text-center'>
                        <h2 className='mt-4 md:mb-10'>Payment for Membership</h2>
                        <div className='flex flex-wrap flex-col md:flex-row justify-center'>
                            <div className='w-full md:w-2/5 pb-4 md:border-r-2 px-6 flex flex-col gap-4'>
                                <h3>Monthly</h3>
                                <div className='flex justify-between'>
                                    <span>Cost</span>
                                    <span>
                                        {feePerMonth ? formatFixed(feePerMonth ?? 0, 18) : 0} $PXT / Month
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Reward Credits</span>
                                    <span>
                                        {creditsPerMonth ? formatFixed(creditsPerMonth ?? 0, 18) : 0} / Month
                                    </span>
                                </div>
                                <div className='flex justify-between items-center md:pt-8'>
                                    <span>Pay for</span>
                                    <select className='border-2 rounded-xl p-2' onChange={(e) => setMonths(Number(e.target.value))}>
                                        {Array(12).fill(0).map((v, m) => {
                                            return <option value={m + 1} key={m}>{m + 1} Month{m > 0 && "s"}</option>
                                        })}
                                    </select>
                                </div>
                                <button onClick={() => pay('month')} className='py-2 px-4 rounded-xl border-2 cursor-pointer font-bold text-white hover:bg-red-600 bg-red-500'>Pay</button>
                            </div>
                            <div className='w-full md:w-2/5 pb-4 px-6 flex flex-col gap-4'>
                                <h3>Annually</h3>
                                <div className='flex justify-between'>
                                    <span>Cost</span>
                                    <span>
                                        {feePerMonth ? formatFixed(feePerYear ?? 0, 18) : 0} $PXT / Year
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Reward Credits</span>
                                    <span>
                                        {creditsPerMonth ? formatFixed(creditsPerMonth ?? 0, 18) : 0} / Month
                                    </span>
                                </div>
                                <div className='flex justify-between items-center md:pt-8'>
                                    <span>Pay for</span>
                                    <select className='border-2 rounded-xl p-2' onChange={(e) => setYears(Number(e.target.value))}>
                                        {Array(3).fill(0).map((v, m) => {
                                            return <option value={m + 1} key={m}>{m + 1} Year{m > 0 && "s"}</option>
                                        })}
                                    </select>
                                </div>
                                <button onClick={() => pay('year')} className='py-2 px-4 rounded-xl border-2 cursor-pointer font-bold text-white hover:bg-red-600 bg-red-500'>Pay</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    ) : <DefaultErrorPage statusCode={404} />
}
