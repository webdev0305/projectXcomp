import styles from "styles/pages/Howtoplay.module.scss"; // Page styles
import Hero from "components/Hero"
import Image from "next/image"
import Link from "next/link"

export default function HowToPlay() {
  const heroImage = "url(/Hero.jpg)"
  return (
    <div style={{paddingTop: "85px"}}>
        <Hero heroImage={heroImage}>
            <h1 className="text-white mt-0 mb-10 text-5xl font-black" style={{fontSize: "calc(25px + 1.8vw)", lineHeight: "calc(25px + 1.8vw)"}}>
            HOW TO PLAY
            </h1>
        </Hero>
        <div className={styles.hiv_module}>
            <div className="container">
                <div className="flex flex-wrap justify-around">
                    <div className="w-full text-center">
                        <h2>Ready Set Play</h2>
                    </div>
                    <div className="w-full md:w-1/4 px-4 relative">
                        <figure className="text-center">
                        <span>1.</span><small>Step 1</small>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/modules/000/020/363/1640190424_jXWQXYgqBA_tap.svg" alt="SELECT YOUR COMPETITION" width={53} height={53}/>
                        <h4>SELECT YOUR COMPETITION</h4>
                        <p>Choose a prize from our selection.</p>
                        </figure>
                    </div>
                    <div className="w-full md:w-1/4 px-4  relative">
                        <figure className="text-center">
                        <span>2.</span><small>Step 2</small>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/modules/000/020/363/1640190424_JraVDsGXID_laptop.svg" alt="LOG IN OR SIGN UP" width={53} height={53}/>
                        <h4>Buy ticket</h4>
                        <p>buy ticket with $PXT2 in your wallet</p>
                        </figure>
                    </div>
                    <div className="w-full md:w-1/4 px-4  relative">
                        <figure className="text-center">
                        <span>3.</span><small>Step 3</small>
                        <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/modules/000/020/363/1640190424_dPUUQfOYdW_ticket.svg" alt="PROCEED TO CHECK OUT" width={53} height={53}/>
                        <h4>PROCEED TO CHECK OUT</h4>
                        <p>and wait for the live draw date to see if you’ve won.</p>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full text-center">
                        <Link href="/competitions" passHref><button className="button">ENTER TO PLAY</button></Link></div>
                </div>
            </div>
        </div>
        <div className={styles.text}>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <h2 style={{textDecoration:"underline"}} id="faq3">Ready. Set. Play. FAQs</h2>
                        <h3>How many tickets will be available for each prize?</h3>
                        <p>We will display on each prize how many tickets are available. Each prize will have its own availability on the number of tickets.</p>
                        <h3>Will the competition end date ever be extended?</h3>
                        <p>NO. We will never extend the end date. We will always commit to the competition end date and draw date.</p>
                        <h3>What happens if the tickets for a competition do not sell out?</h3>
                        <p>The draw will happen even if we do not sell all the tickets. We will still give away the prize and the set end date regardless.</p>
                        <h3>How is the draw done for Ready Set Play?</h3>
                        <p>The draw will be on the pre-set draw date and will be on a livestream using the Random Number Generator.</p>
                        <h3>How many tickets can I buy?</h3>
                        <p>On each prize we will let you know how many tickets you can buy for the prize. Each prize will have different limits.</p>
                        <h2 style={{textDecoration:"underline"}} id="faq4">Refer a Friend FAQs</h2>
                        {/* <h3>How do I refer a friend?</h3>
                        <p>Once you have logged in to your account and you are an active Y-Club Member, go to My Referrals" in "My Account".</p>
                        <h3>When will I receive my credit?</h3>
                        <p>You will receive your credit 7 days after your friend successfully joins and does not cancel.</p>
                        <h3>Where does my credit show?</h3>
                        <p>Your credit will show in "My Account". You can also see how much credit you have earnt from referrals in "My Referrals" dashboard.</p>
                        <h3>When will my friend receive their credit?</h3>
                        <p>Your friend will receive their credit after their 2nd subscription monthly payment is made.</p>
                        <h3>How many people can I refer?</h3>
                        <p>You can refer up to 100 people a day.</p>
                        <p>If you have any further questions, please email the team at 
                            <a href="mailto:#">hello@yiannimizecomps.com</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
