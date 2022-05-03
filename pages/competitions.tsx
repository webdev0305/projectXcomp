import Hero from "components/Hero"
import Howtoplay from "components/Howtoplay"
import Winanywhere from "components/Winanywhere"
import Features from "components/Features"
import Previouswinners from "components/Previouswinners"
import CompetitionItem from "components/CompetitionItem"
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import { eth } from "state/eth";
import Counter from "components/Counter";
import Router from "next/router";
import Link from 'next/link';

export default function Competitions() {
  const { provider } = eth.useContainer()
  const {
    dataLoading,
    competitions,
    syncStatus
  } = token.useContainer()
  const [competition, setCompetition] = useState<ICompetition>({})
  useEffect(() => {
    syncStatus()
  }, [provider])
  useEffect(() => {
    if (Router.asPath != '/')
      document.querySelector("#competitions")?.scrollIntoView()
  })
  useEffect(() => {
    const comp = competitions.reduce((prev: any, cur: ICompetition) => {
      if (cur.status != 1 || cur.timeEnd == undefined) return prev
      if (prev.timeEnd == undefined || prev?.timeEnd > cur?.timeEnd)
        return cur
      return prev
    }, {})
    if (comp) setCompetition(comp)
  }, [competitions])
  return (
	<>
      <Hero />
      <Howtoplay />
      <section className="position-relative pt-120 pb-120" id="draws">
        <div className="bg-el">
          <img src="assets/images/elements/contest-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-header text-center">
                <h2 className="section-title">Current Competitions</h2>
                <p>
                  We always have a wide variety of prizes including crypto, vouchers and luxury prizes.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row end --> */}
          <div
            className="row wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-12">
              <div className="tab-content" id="contestTabContent">
                <div
                  className="tab-pane fade show active"
                  id="car"
                  role="tabpanel"
                  aria-labelledby="car-tab"
                >
                  {/* <div className="row mb-none-30">
                    {contestArray.map((el, i) => (
                      <div className="col-xl-4 col-md-6 mb-30" key={i}>
                        <div className="contest-card">
                          <Link href={`/competiton/${el.id}`} >
                            <a href="" className="item-link"></a>
                          </Link>
                          <div className="contest-card__thumb">
                            <img src={el.img} alt="image" />
                            <div className="contest-num">
                              <span>Comp no:</span>
                              <h4 className="number">{el.CompNo}</h4>
                            </div>
                          </div>
                          <div className="contest-card__content">
                            <div className="left">
                              <h5 className="contest-card__name">
                                {el.cardName}
                              </h5>
                            </div>
                            <div className="right">
                              <span className="contest-card__price">
                                {el.number}
                              </span>
                              <p>{el.price}</p>
                            </div>
                          </div>
                          <div className="contest-card__footer">
                            <ul className="contest-card__meta">
                              <li>
                                <i className="las la-clock"></i>
                                <span>{el.day}</span>
                              </li>
                              <li>
                                <i className="las la-ticket-alt"></i>
                                <span>{el.remaining}</span>
                                <p>Remaining</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- contest-card end --> */}
                      {/* </div>
                    ))}
                  </div> */}
                  <div className="row mb-none-30">
                    {!dataLoading && competitions?.filter((item:any) => {
                      return item.status === 1 
                      && item.timeEnd != undefined && item.timeEnd > new Date()
                    }).map((item:any) => (
				            <div className="col-xl-4 col-md-6 mb-30" key={item.id}>
					              <CompetitionItem
					                href={`/competition/${item.id}`}
					                item={item}
					                showStatus={false}
					              />
				            </div>
			              ))}
                  </div>
                </div>
              </div>
              {/* <!-- table content end --> */}
            </div>
          </div>
          {/* <!-- row end--> */}
        </div>
      </section>
      <Winanywhere />
      <Features />
      {/*<Previouswinners>
      </Previouswinners>*/}
    </>
  );
}
