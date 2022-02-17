import styles from "styles/pages/Home.module.scss"; // Page styles
import Clock from "components/Clock"
import TwoImage from "components/TwoImage"
import Hero from "components/Hero"
import Link from "next/link"

export default function Home() {

  const rolex = "url(prize_image/Rolex.jpg)"
  const square = "url(prize_image/SQUARE-MODEULE.jpg)"
  const heroImage = "url(/Hero.jpg)"
  return (
    <div style={{paddingTop: "85px"}}>
      <Hero heroImage={heroImage} >
        <h1 className="text-white mt-0 mb-4 md:mb-10 text-5xl font-black" style={{fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)"}}>
          MANY PRIZES TO CHOOSE FROM
        </h1>
        <Clock type="white" endTime={1644041274}/>
        <h2 className="text-3xl md:mb-10">&nbsp;</h2>
        <Link href="/competitions" passHref><button className={styles.home_button}>Play Now</button></Link>
      </Hero>
      <div className="py-10">
        <div className={styles.container_fluid}>
            <div className="flex flex-auto flex-wrap justify-center items-center">
              <div className="my-4 mx-8 w-auto max-w-[100%]">
                  <div className="flex flex-wrap">
                    <div className="flex-auto w-auto max-w-[100%]">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trophy-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={67.5} height={60}><path fill="currentColor" d="M359.3 138.9l-43.4-6.3-19.4-39.3c-3.5-7-13.5-7.1-17 0l-19.4 39.3-43.4 6.3c-7.8 1.1-10.9 10.7-5.3 16.2l31.4 30.6-7.4 43.2c-1.3 7.7 6.8 13.7 13.8 10l38.8-20.4 38.8 20.4c6.9 3.6 15.1-2.2 13.8-10l-7.4-43.2 31.4-30.6c5.6-5.5 2.5-15.1-5.3-16.2zM448 64V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v60.8C0 201.1 68.3 266 159.6 283.4c27.4 57.9 68.1 88.2 104.4 97.4V464h-64c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40h-64v-83.2c36.3-9.3 77-39.5 104.4-97.4C507.5 266.1 576 201.2 576 140.8V80c0-8.8-7.2-16-16-16H448zM48 140.8V112h80c0 39.2 2.1 76.2 12.3 116.8-55.1-18.9-92.3-58.9-92.3-88zM288 336c-53 0-112-78.4-112-216V48h224v72c0 140.5-60.8 216-112 216zm240-195.2c0 29.1-37.2 69.1-92.3 88C445.9 188.2 448 151.1 448 112h80v28.8z"></path></svg>
                    </div>
                    <div className="flex-auto w-auto max-w-[100%]">
                        <h3 style={{fontSize: "calc(20px + 1.5vw)", lineHeight: "calc(20px + 1.5vw)"}} className="font-black">665</h3>
                        <p className="font-semibold uppercase">WINNERS</p>
                    </div>
                  </div>
              </div>
              <div className="my-4 mx-8 w-auto max-w-[100%]">
                  <div className="flex flex-wrap">
                    <div className="flex-auto w-auto max-w-[100%]">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={67.5} height={60}><path fill="currentColor" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>
                    </div>
                    <div className="flex-auto w-auto max-w-[100%]">
                        <h3 style={{fontSize: "calc(20px + 1.5vw)", lineHeight: "calc(20px + 1.5vw)"}} className="font-black">£1,288,047</h3>
                        <p className="font-semibold uppercase">GIVEN IN PRIZES</p>
                    </div>
                  </div>
              </div>
              <div className="my-4 mx-8 w-auto max-w-[100%]">
                  <div className="flex flex-wrap">
                    <div className="flex-auto w-auto max-w-[100%] mt-4 flex flex-wrap">
                        <svg viewBox="0 0 251 46" xmlns="http://www.w3.org/2000/svg" style={{ width: "120px", height: "22px"}}>
                            <g>
                                <path  fill="#00b67a" d="M0 46.330002h46.375586V0H0z"></path>
                                <path d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"></path>
                            </g>
                            <g>
                                <path  fill="#00b67a" d="M51.24816 46.330002h46.375587V0H51.248161z"></path>
                                <path  fill="#00b67a" d="M51.24816 46.330002h23.187793V0H51.248161z"></path>
                                <path  d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"></path>
                            </g>
                            <g>
                                <path fill="#00b67a" d="M102.532209 46.330002h46.375586V0h-46.375586z"></path>
                                <path fill="#00b67a" d="M102.532209 46.330002h23.187793V0h-23.187793z"></path>
                                <path d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"></path>
                            </g>
                            <g>
                                <path fill="#00b67a" d="M153.815458 46.330002h46.375586V0h-46.375586z"></path>
                                <path fill="#00b67a" d="M153.815458 46.330002h23.187793V0h-23.187793z"></path>
                                <path d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"></path>
                            </g>
                            <g>
                                <path fill="#00b67a" d="M205.064416 46.330002h46.375587V0h-46.375587z"></path>
                                <path fill="#00b67a" d="M205.064416 46.330002h23.187793V0h-23.187793z"></path>
                                <path d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 30 30"  style={{ height: "20px", width: "20px"}} className="ml-4">
                          <path fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"></path>
                        </svg>
                        <span className="text-sm font-semibold">Trustpilot</span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div> 
      <div>
        <div className="w-full flex flex-wrap">
          <TwoImage 
            src={rolex} 
            color="white" 
            title="MERCEDES C63 507 EDITION OR £25,000 TAX FREE CASH" 
            description="COMPETITION ENDS + LIVE DRAW 16TH FEBRUARY" 
            url="/competitions"
          />
          <TwoImage 
            src={rolex} 
            color="white" 
            title="MERCEDES C63 507 EDITION OR £25,000 TAX FREE CASH" 
            description="COMPETITION ENDS + LIVE DRAW 16TH FEBRUARY" 
            url="/competitions"
          />
          <TwoImage 
            src={square} 
            color="black" 
            title="MERCEDES C63 507 EDITION OR £25,000 TAX FREE CASH" 
            description="COMPETITION ENDS + LIVE DRAW 16TH FEBRUARY" 
            url="/competitions"
          />
          <TwoImage 
            src={square} 
            color="black" 
            title="MERCEDES C63 507 EDITION OR £25,000 TAX FREE CASH" 
            description="COMPETITION ENDS + LIVE DRAW 16TH FEBRUARY" 
            url="/competitions"
          />
        </div>
      </div>
      <div className={styles.howitworks}>
        <div className="w-full flex flex-wrap">
          <div className="flex flex-auto flex-wrap justify-center items-center h-full">
            <div className="z-10 text-center uppercase">
              <h2 className="my-4">How it works</h2>
              <Link href="/competitions" passHref><button className={styles.home_button}>Enter to Play</button></Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="py-40 bg-cover bg-center relative" style={{backgroundImage: "url(/prize_image/yclub.webp)"}}>
        <div className="container md:mx-20 md:px-10">
          <div className="flex flex-wrap">
            <div className="md:w-1/2 text-white md:px-10">
              <h2 className={styles.h2} > JOIN THE XCLUB! </h2>
              <p className="pt-0 leading-loose text-lg mb-4">
              For every month as a member, you will receive £9.99 credit to spend on ticket purchases which are 50% discounted with your exclusive discount code. Cancel anytime.
              </p>
              <Link href="/join" passHref><button className={styles.home_button}>Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
