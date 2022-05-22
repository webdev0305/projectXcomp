import { eth } from "state/eth" // Global state
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from 'next/link';
import axios from "axios"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from "react-toastify";
import moment from "moment";
import classNames from "classnames";

export default function Results() {
    const { provider,address, unlock, lock } = eth.useContainer()
    const {
        dataLoading,
        competitions,
        verifyMessage,
        signMessage,
        syncStatus
    } = token.useContainer()
    const [loading, setLoading] = useState(false)
    const [openPrizeView, setOpenPrizeView] = useState(false)
    const [prizeInstruction, setPrizeInstruction] = useState('')
    useEffect(() => {
        syncStatus()
    }, [provider])
    
    //console.log(dataLoading)
    return (
        <div className="page-wrapper">
            <div className="inner-hero-section style--two">
                <div className="bg-shape">
                    <img src="assets/images/elements/inner-hero-shape.png" alt="image"/>
                </div>
            </div>
            <div className="mt-minus-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-card">
                                <h3 className="user-card__name">{address?.slice(0,5)}...{address?.slice(-4)}</h3>
                            </div>
                            <div className="user-action-card">
                                <ul className="user-action-list">
                                	<li>
                                        <Link href="/results">
                                            <a className="text-white">Results</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/draws">
                                            <a className="text-white">My Draws</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wins">
                                            <a className="text-white">My Wins</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-4">
                            <div className="row mt-0  mb-none-30">
                                <div className="col-lg-12 mb-30">
                                    {competitions?.filter((item:any) => {
                                        // return true;
                                    return item.timeEnd != undefined && item.status == 2 && item.id > 4 && item.id != 6
                                    }).reverse().map((item:any) => (
                                        <div className="winner-card mb-30" key={item.id}>
                                            <div className="winner-card__thumb">
                                                <img src={item.logoImage} alt="image" />
                                            </div>
                                            <div className="winner-card__content">
                                                <div className="content-top">
                                                    <div className="left">
                                                        <h5 className="text-[22px]">{item.title}</h5>
                                                    </div>
                                                    <div className="right">
                                                        <span className="text-white">Draw took place on<br/>{moment.unix(item.timeEnd&&item.timeEnd.getTime()/1000).format(" Do MMM Y")}</span>
                                                    </div>
                                                </div>
                                                <div className="content-bottom">
                                                    <div className="number-list-wrapper">
                                                        <p className="text-white text-[18px]">Won by 0x...{item.winner.id?.slice(-6)}</p>
                                                    </div>
                                                    <div className="right">
                                                        <p>Comp No: {item.id}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}