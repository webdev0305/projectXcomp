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

export default function Wins() {
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
    useEffect(() => {
        if (Router.asPath != '/')
        document.querySelector("#competitions")?.scrollIntoView()
    })
   

    const handleSignMessage = async(id:any, winner:string) => {
        const signature = await signMessage(`competition${id}`)
        try {
        axios.post(`/api/competition/instruction`,{id:id, signature:signature, msg:`competition${id}`}).then(res => {
            setLoading(false), 
            setOpenPrizeView(true)
            setPrizeInstruction(res.data.data)
            
        }).finally()
        } catch (ex: any) {
            toast.error(`Error! ${ex}`)
            setLoading(false)
        }
    };
    
    console.log(dataLoading)
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
                                    return item.timeEnd != undefined && item.status == 2 && item.winner.id.toLowerCase() === String(address).toLowerCase()
                                    }).map((item:any) => (
                                        
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
                                                        <span>Draw took place on</span>
                                                        <p className="text-white">{moment.unix(item.timeEnd&&item.timeEnd.getTime()/1000).format(" Do MMM Y")}</p>
                                                    </div>
                                                </div>
                                                <div className="content-bottom">
                                                    <div className="number-list-wrapper">
                                                        <p className="text-white text-[18px]">You won!</p>
                                                        <p className="text-white text-[18px]">Claim instructions goes <a href="#" onClick={()=>handleSignMessage(item.id, item.winner.id)}>here</a></p>
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
            <div className={classNames(openPrizeView?"block":"hidden","modal")}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header border-0" style={{backgroundImage: "-webkit-linear-gradient(90deg, #e82a7a 0%, #360354 100%)"}}>
                            <h4 className="modal-title">Prize Instruction</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={()=>setOpenPrizeView(false)}>&times;</button>
                        </div>

                        <div className="modal-body" style={{backgroundImage: "-webkit-linear-gradient(90deg, #c165dd 0%, #5c27fe 100%)"}}>
                            <div className="p-4">
                                <h4>{prizeInstruction}</h4>
                            </div>
                            <div className="modal-footer border-t-[1px]">
                                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setOpenPrizeView(false)}>Close</button>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    );
}