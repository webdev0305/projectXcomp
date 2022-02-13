import styles from "styles/pages/Winners.module.scss"; // Page styles
import Hero from "components/Hero"
import Image from "next/image"

export default function Winners() {
  const heroImage = "url(/Hero.jpg)"
  return (
    <div style={{paddingTop: "85px"}}>
        <Hero heroImage={heroImage} isOverlay={true}>
            <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)"}}>
                WINNERS
            </h1>
        </Hero>
        
        <div className={styles.winners}>
            <div className="container">
                <div className="flex flex-wrap items-center relative">
                    <div className="w-full md:w-1/2 px-4">
                        <p className="date">09 February 2022</p>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/dc5242c0-d255-4d39-a54d-9cc26256fc92/770x0/1644492902_8qF5IBLczs_3-John-Lowry-500-Site-Credit--1.JPG" alt="ABOUT YIANNIMIZE COMPETITIONS" width={770} height={433} />
                        <h4>JOHN LOWRY WINS £500 SITE CREDIT!</h4>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <p className="date">09 February 2022</p>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/a4695b9d-34d9-4da9-ae96-05a7cfdda557/770x0/1644489796_tmDacnbFXO_11-Jonathon-Walling-2500-1.JPG" alt="ABOUT YIANNIMIZE COMPETITIONS" width={770} height={433} />
                        <h4>JOHN LOWRY WINS £500 SITE CREDIT!</h4>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <p className="date">09 February 2022</p>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/a4695b9d-34d9-4da9-ae96-05a7cfdda557/770x0/1644489796_tmDacnbFXO_11-Jonathon-Walling-2500-1.JPG" alt="ABOUT YIANNIMIZE COMPETITIONS" width={770} height={433} />
                        <h4>JOHN LOWRY WINS £500 SITE CREDIT!</h4>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <p className="date">09 February 2022</p>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/a4695b9d-34d9-4da9-ae96-05a7cfdda557/770x0/1644489796_tmDacnbFXO_11-Jonathon-Walling-2500-1.JPG" alt="ABOUT YIANNIMIZE COMPETITIONS" width={770} height={433}  />
                        <h4>JOHN LOWRY WINS £500 SITE CREDIT!</h4>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  );
}
