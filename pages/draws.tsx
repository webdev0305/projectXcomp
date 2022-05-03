import { eth } from "state/eth" // Global state
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from 'next/link';

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
    useEffect(() => {
        const comp = competitions.filter((cur: ICompetition) => {return cur.purchased!=undefined && cur.purchased > 0})
        if (comp) setCompetition(comp)
    }, [competitions])
    console.log(competitions)
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
                                {competition.length>0 && competition.map((item:any)=>
                                    <div className="col-xl-6 col-lg-12 col-md-6 mb-30" key={item.id}>
                                    <div className="contest-card">
                                        <div className="contest-card__thumb">
                                            <a href="competition_detail.html" className="item-link"></a>
                                            <img src="assets/images/contest/3.png" alt="image"/>
                                                <div className="contest-num">
                                                    <span>Comp no:</span>
                                                    <h4 className="number">{item.id}</h4>
                                                </div>
                                        </div>
                                        <div className="contest-card__content">
                                            <div className="left">
                                                <h5 className="contest-card__name">{item.title}</h5>
                                            </div>
                                            <div className="right">
                                                <span className="contest-card__price">{item.purchased}</span>
                                                <p>tickets</p>
                                            </div>
                                        </div>
                                        <div className="contest-card__footer">
                                            <ul className="contest-card__meta">
                                                <li>
                                                    <i className="las la-clock"></i>
                                                    <span>5hrs</span>
                                                </li>
                                                <li>
                                                    <i className="las la-ticket-alt"></i>
                                                    <span>241</span>
                                                    <p>Remaining</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}