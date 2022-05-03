import classNames from "classnames";
import Image from "next/image";
import styles from "styles/components/HowToPlay.module.scss"

export default function HowToPlay() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className={classNames(styles.play_elements, styles.play_elements_xlogo)}>
            <img src="assets/images/projectx/elements/play-el.png" alt="image" />
            </div>
            <div className="container">
            <div className="flex">
                <div className="lg:w-1/2 sm:text-left text-center wow fadeInUp">
                <div className="section-header">
                    <h2 className="section-title">How To Play</h2>
                    <p>Follow these 3 easy steps! </p>
                </div>
                </div>
            </div>
            <div className="flex -mb-8 xl:justify-start justify-center">
                <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 mb-8 px-4">
                    <div className="play-card bg_img" style={{backgroundImage: 'url(/assets/images/elements/card-bg-1.jpg)'}}>
                        <div className="play-card__icon">
                        <img src="assets/images/projectx/icon/play/1.png" alt="image-icon" />
                        <span className="play-card__number">01</span>
                        </div>
                        <div className="play-card__content">
                        <h3 className="play-card__title">Buy $PXT2</h3>
                        <p>Purchase PXT2 token from <a href="https://app.bogged.finance/avax/swap?tokenIn=AVAX&amp;tokenOut=0x9e20Af05AB5FED467dFDd5bb5752F7d5410C832e" target="_blank" rel="noreferrer">DEX</a></p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 mb-8 px-4">
                    <div className="play-card bg_img" style={{backgroundImage: 'url(/assets/images/elements/card-bg-2.jpg)'}}>
                        <div className="play-card__icon">
                        <img src="assets/images/icon/play/1.png" alt="image-icon" />
                        <span className="play-card__number">02</span>
                        </div>
                        <div className="play-card__content">
                        <h3 className="play-card__title">Buy Tickets</h3>
                        <p>Pick your <a href="draws">prize draw</a> &amp; complete your purchase</p>
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 mb-8 px-4">
                    <div className="play-card bg_img" style={{backgroundImage: 'url(/assets/images/elements/card-bg-3.jpg)'}}>
                        <div className="play-card__icon">
                        <img src="assets/images/icon/play/3.png" alt="image-icon" />
                        <span className="play-card__number">03</span>
                        </div>
                        <div className="play-card__content">
                        <h3 className="play-card__title">Win</h3>
                        <p>Start dreaming, you're almost there</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
