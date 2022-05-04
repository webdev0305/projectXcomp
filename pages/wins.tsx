import { eth } from "state/eth" // Global state
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from 'next/link';
import moment from "moment";

export default function Wins() {
    const { provider,address, unlock, lock } = eth.useContainer()
    const {
        dataLoading,
        competitions,
        syncStatus
    } = token.useContainer()
    const [competition, setCompetition] = useState<any>({})
    useEffect(() => {
        syncStatus()
    }, [provider])
    useEffect(() => {
        if (Router.asPath != '/')
        document.querySelector("#competitions")?.scrollIntoView()
    })
    console.log(competitions)
    useEffect(() => {
       {competitions?.filter((item:any) => {
        return item.purchased > 0 
        && item.timeEnd != undefined && item.status == 2 && item.winner.id.toLowerCase() === String(address).toLowerCase()
        }).map((item:any) => 
        console.log(moment.unix(item.timeEnd&&item.timeEnd.getTime()/1000).format(" Do MMM Y"))
            )}
      }, [competitions])
    
    return (
        <div className="page-wrapper">
            <div className="inner-hero-section style--five">
                <div className="bg-shape">
                    <img src="assets/images/elements/inner-hero-shape.png" alt="image"/>
                </div>
            </div>
            <div className="mt-minus-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-card">
                                <h3 className="user-card__name">{address?.slice(0,8)}...{address?.slice(-6)}</h3>
                            </div>
                            <div className="user-action-card">
                                <ul className="user-action-list">
                                    <li>
                                        <Link href="/draws">
                                            <a>My Draws</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wins">
                                            <a>My Wins</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-4">
                            <div className="row mt-0  mb-none-30">
                                <div className="col-lg-12 mb-30">
                                    {competitions?.filter((item:any) => {
                                    return item.purchased > 0 
                                    && item.timeEnd != undefined && item.status == 2 && item.winner.id.toLowerCase() === String(address).toLowerCase()
                                    }).map((item:any) => (
                                        
                                        <div className="winner-card mb-30" key={item.id}>
                                            <div className="winner-card__thumb">
                                                <img src={item.logoImage} alt="image" />
                                            </div>
                                            <div className="winner-card__content">
                                                <div className="content-top">
                                                    <div className="left">
                                                        <h5 className="text-[20px]">{item.title}</h5>
                                                    </div>
                                                    <div className="right">
                                                        <span>Draw took place on</span>
                                                        <p className="text-white">{moment.unix(item.timeEnd&&item.timeEnd.getTime()/1000).format(" Do MMM Y")}</p>
                                                    </div>
                                                </div>
                                                <div className="content-bottom">
                                                    <div className="number-list-wrapper">
                                                        <p>You won!</p>
                                                        <p>Claim instructions goes <a href="#">here</a></p>
                                                    </div>
                                                    <div className="right">
                                                        <p>Comp No:</p>
                                                        <span className="contest-num">{item.id}</span>
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