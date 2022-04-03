import styles from "styles/pages/Claim.module.scss"; // Page styles
import Hero from "components/Hero"
import CompetitionItem from "components/CompetitionItem"
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import { eth } from "state/eth";
import Counter from "components/Counter";
import Router from "next/router";
import HowToPlay from "components/HowToPlay";
import CurrentCompetitions from "components/CurrentCompetitions";
import LuckyWinners from "components/LuckyWinners";

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
      <Hero/>
      <HowToPlay />
      <CurrentCompetitions />
      {/*  
      <div className="pt-10 bg-gray-300">
        <div className="container flex flex-wrap gap-2">
          {!dataLoading && competitions?.filter((item) => {
            return item.status === 1 
          }).map((item) => (
            <div className="flex-shrink mb-12 py-4 md:w-1/3 2xl:w-1/4 md:px-4 bg-white rounded-md" key={item.id}>
              <CompetitionItem
                href={`/competition/${item.id}`}
                item={item}
                showStatus={false}
              />
            </div>
          ))}
        </div>
      </div>
      */}
      <section className="overview-section pt-120">
        <div className="map-el"><img src="assets/images/projectx/elements/map.png" alt="image" /></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
              <div className="section-header text-center">
                <h2 className="section-title">Win anywhere on the planet 24/7</h2>
                <p>Crypto allows anyone to enter anonymously, anywhere, anytime.</p><p>Entries from other galaxies welcome!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-pointer">
          <div className="pointer num-1"></div>
          <div className="pointer num-2"></div>
          <div className="pointer num-3"></div>
          <div className="pointer num-4"></div>
          <div className="pointer num-5"></div>
          <div className="pointer num-6"></div>
          <div className="pointer num-7"></div>
          <div className="pointer num-8"></div>
          <div className="pointer num-9"></div>
        </div>
      </section>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row items-center">
            <div className="lg:w-1/2 px-4 lg:order-1 order-2">
              <div className="row mb-none-30">
                <div className="lg:w-1/2 px-4 mb-30">
                  <div className="row mb-none-30">
                    <div className="lg:w-full px-4 md:w-1/2 mb-30 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                      <div className="feature-card hover--effect-1">
                        <div className="feature-card__icon">
                          <img src="assets/images/icon/feature/1.png" alt="image" />
                        </div>
                        <div className="feature-card__content">
                          <h3 className="feature-title">Anonymity</h3>
                          <p>No need to register, just connect your wallet and play</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-full px-4 md:w-1/2 mb-30 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                      <div className="feature-card hover--effect-1">
                        <div className="feature-card__icon">
                          <img src="assets/images/icon/feature/3.png" alt="image" />
                        </div>
                        <div className="feature-card__content">
                          <h3 className="feature-title">True Random</h3>
                          <p>Utilising <a href="">ChainLink</a> random service for ultimate fairness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 px-4 mb-30 lg:mt-40">
                  <div className="row mb-none-30">
                    <div className="lg:w-full px-4 md:w-1/2 mb-30 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                      <div className="feature-card hover--effect-1">
                        <div className="feature-card__icon">
                          <img src="assets/images/icon/feature/2.png" alt="image" />
                        </div>
                        <div className="feature-card__content">
                          <h3 className="feature-title">Security</h3>
                          <p>Ultimate transparency from the Avalanche blockchain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-4 lg:order-2 order-1 lg:text-left text-center wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.5s">
              <div className="section-header">
                <h2 className="section-title">Our features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum, sem metus iaculis sapien, sed bibendum lectus augue eu metus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LuckyWinners/>
      
    </>
  );
}
