import Image from "next/image"; // Images

export default function Howtoplay() {
  return (
	<>
    <section className="position-relative pt-120 pb-120 overflow-hidden">
        <div
          className="play-elements wow bounceIn play-elements-xlogo"
          data-wow-duration="0.5s"
          data-wow-delay="0.7s"
        >
          <img src="assets/images/projectx/elements/play-el.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 text-sm-left text-center wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-header">
                <h2 className="section-title">How To Play</h2>
                <p>Follow these 3 easy steps!</p>
              </div>
            </div>
          </div>
          <div className="row mb-none-30 justify-content-xl-start justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                <div className="play-card bg_img play-card-one">
                  <div className="play-card__icon">
                    <img src="assets/images/projectx/icon/play/1.png" alt="image-icon" className="inline"/>
                    <span className="play-card__number">1</span>
                  </div>
                  <div className="play-card__content">
                    <h3 className="play-card__title">Buy $PXT</h3>
                    <p>Purchase PXT from 
                    <a
                      href="https://app.bogged.finance/avax/swap?tokenIn=AVAX&tokenOut=0x9ADCbba4b79eE5285E891512b44706F41F14CAFd"
                      target="_blank"
                      rel="noreferrer"
                    > DEX
                    </a> or use your unclaimed PXT!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                <div className="play-card bg_img play-card-two">
                  <div className="play-card__icon">
                    <img src="assets/images/icon/play/1.png" alt="image-icon" className="inline"/>
                    <span className="play-card__number">2</span>
                  </div>
                  <div className="play-card__content">
                    <h3 className="play-card__title">Play</h3>
                    <p>Pick your <a href='draws'>prize draw</a> &amp; complete your purchase</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                <div className="play-card bg_img play-card-three">
                  <div className="play-card__icon">
                    <img src="assets/images/icon/play/3.png" alt="image-icon" className="inline"/>
                    <span className="play-card__number">3</span>
                  </div>
                  <div className="play-card__content">
                    <h3 className="play-card__title">Win</h3>
                    <p>Start dreaming, you&#39;re almost there</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    </>
  );
}
