import styles from "styles/pages/Claim.module.scss"; // Page styles
import Hero from "components/Hero"
import CompetitionItem from "components/CompetitionItem"

export default function Competitions() {
  const heroImage = "url(/Hero.jpg)"
  return (
    <div style={{paddingTop: "85px"}}>
      <Hero heroImage={heroImage}>
        <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)"}}>
          COMPETITIONS
        </h1>
      </Hero>
      <div className="container mt-10">
        <div className="flex flex-wrap">
          <div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div>
          <div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div><div className="mb-12 md:w-1/3 md:px-4">
            <CompetitionItem 
              title="SUZUKI GSX"
              subTitle="R1000 - OR £8,000 CASH"
              detailLink="/competition/1"
              ticketPrice="1.4"
              memberPrice="0.7"
              compImage="compImage//comp1.jpg"
              maxAmount={20000}
              leftAmount={15000}
              limitedAmount={500}
              endTime={1644368400}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
