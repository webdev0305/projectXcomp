import { eth } from "state/eth" // Global state
import { ICompetition, token } from "state/competition"
import DrawItem from "components/DrawItem"
import LoadingComponent from "components/Loader";
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from 'next/link';

export default function Draws() {
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
        const comp = competitions.filter((item:any) => {
            return item.purchased > 0 
            && item.timeEnd != undefined && item.status < 2
            })
        if (comp) setCompetition(comp)
      }, [!dataLoading, competitions])
   

    return (
        <>
        {dataLoading?
        <div className="preloader">
            <LoadingComponent />{" "}
        </div>
        :
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
                                            <a className="text-white">My Draws</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wins">
                                            <a  className="text-white">My Wins</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-4">
                            <div className="row mt-0  mb-none-30">
                            {!dataLoading && competitions?.filter((e:any) => {
                                // return true;
                                // console.log(e)
                                return e.purchased > 0 
                                && e.timeEnd != undefined && e.status < 2
                                }).map((item:any) =>
                                <div className="col-xl-6 col-lg-12 col-md-6 mb-30" key={item.id}>
                                    <DrawItem 
                                        href={`/competition/${item.id}`}
                                        item={item} 
                                     />
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    );
}