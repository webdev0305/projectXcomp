import styles from "styles/pages/About.module.scss"; // Page styles
import Hero from "components/Hero"
import Image from "next/image"

export default function About() {
    const heroImage = "url(/Hero.jpg)"
    return (
        <div>
            <Hero>
                <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{ fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)" }}>
                    About ProjectX Competition
                </h1>
            </Hero>

            <div className={styles.textImage}>
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 px-4">
                            <h4>ABOUT projectX COMPETITIONS</h4>
                            <p>projectX Competitions, an extension of the world famous projectX brand, was founded by Yianni Charalambous. Our goal is to offer the opportunity to win exclusive prizes that you could normally only dream about.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/modules/000/000/202/570x0/1638890831_Puu0WI4kQJ_yianni-about.png" alt="ABOUT YIANNIMIZE COMPETITIONS" width={570} height={570} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.textImage}>
                <div className="container">
                    <div className="flex flex-wrap items-center md:flex-row-reverse">
                        <div className="w-full md:w-1/2 px-4">
                            <h4>ABOUT projectX CHARALAMBOUS</h4>
                            <p>projectX Charalambous, also known as the king of car customisers, has fast become the guy the rich and famous trust with their lavish rides, boasting an A-list clientele that includes some of the biggest names in the worlds of sport and entertainment. Also, as a serial entrepreneur as part of his portfolio has decided to extend his reach in making dreams a reality with projectX Competitions.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/modules/000/000/203/570x0/s2.jpg" alt="ABOUT YIANNI CHARALAMBOUS" width={570} height={570} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
