import styles from "styles/pages/Claim.module.scss"; // Page styles
import Hero from "components/Hero"
import CompetitionItem from "components/CompetitionItem"
import { ICompetition, token } from "state/competition"
import { useEffect } from "react";
import { eth } from "state/eth";

export default function Competitions() {
  const { provider } = eth.useContainer()
  const {
    dataLoading,
    competitions,
    syncStatus
  } = token.useContainer()
  const heroImage = "url(/Hero.jpg)"
  useEffect(() => {
    syncStatus()
  }, [provider])
  return (
    <div style={{ paddingTop: "85px" }}>
      <Hero heroImage={heroImage}>
        <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{ fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)" }}>
          COMPETITIONS
        </h1>
      </Hero>
      <div className="container mt-10">
        <div className="flex flex-wrap">
          {!dataLoading && competitions?.filter((item) => {
            return item.status === 1 /*&& item.timeEnd != undefined && item.timeEnd > new Date()*/
          }).map((item) => (
            <div className="flex-shrink mb-12 md:w-1/3 md:px-4" key={item.id}>
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
  );
}
