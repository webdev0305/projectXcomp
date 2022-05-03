import styles from "styles/pages/Winners.module.scss"; // Page styles
import Hero from "components/Hero"
import Image from "next/image"
import { token } from "state/competition";

export default function Winners() {
    const heroImage = "url(/Hero.jpg)"
    const {
        dataLoading,
        competitions
    } = token.useContainer()
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit"
        }).format(date)
    }
    return (
        <div>
            <Hero>
                <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{ fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)" }}>
                    WINNERS
                </h1>
            </Hero>
            <div className={styles.winners}>
                <div className="container">
                    <div className="flex flex-wrap items-center relative">
                        {competitions.filter(item => item.status === 2).map(item =>
                            <div className="w-full md:w-1/2 px-4" key={item.id}>
                                <p className="date">{formatDate(item.timeEnd ?? new Date())}</p>
                                <img src={item.winnerImage} alt="Winner" width={770} height={433} />
                                <h4>{item.winner?.nickName} wins {item.title}!</h4>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
