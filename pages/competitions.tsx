import styles from "styles/pages/Claim.module.scss"; // Page styles
import Hero from "components/Hero"
import CompetitionItem from "components/CompetitionItem"
import { ICompetition, token } from "state/competition"
import { useEffect, useState } from "react";
import { eth } from "state/eth";
import Counter from "components/Counter";
import Router from "next/router";

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
    }, {})
    if (comp) setCompetition(comp)
  }, [competitions])
  return (
    <div>
      <Hero>
        <h1 className="text-white mt-0 mb-10 text-4xl font-black">
          Next Competition
        </h1>
        <Counter endTime={competition.timeEnd ?? new Date()} />
        <button className="mt-10 bg-red-700 hover:bg-red-500 px-8 py-4 font-bold text-xl">Play Now!</button>
      </Hero>
      <div id="competitions" />
      <div className="pt-10 bg-gray-300">
        <div className="container flex flex-wrap gap-2">
          {!dataLoading && competitions?.filter((item) => {
            return item.status === 1 /*&& item.timeEnd != undefined && item.timeEnd > new Date()*/
          }).map((item) => (
            <div className="flex-shrink mb-12 py-4 md:w-1/3 lg:w-1/4 md:px-4 bg-white rounded-md" key={item.id}>
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
