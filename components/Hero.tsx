import classNames from "classnames";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="hero">
        <div className="hero__shape">
          <img src="assets/images/elements/hero-shape.jpg.png" alt="image" />
        </div>
        <div className="hero__element">
          <img src="assets/images/elements/hero-building.png" alt="image" />
        </div>
        <div
          className="hero__car wow bounceIn"
          data-wow-duration="0.5s"
          data-wow-delay="1s"
        >
          <img
            src="assets/images/elements/car-ray.png"
            alt="image"
            className="car-ray"
          />
          <img
            src="assets/images/projectx/hero.png"
            alt="image"
            className="hero-car"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <div className="col-lg-6 col-md-8">
              <div className="hero__content">
                <h2
                  className="hero__title wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.5s"
                >
                  WIN BIG
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.7s"
                >
                  Now's your chance to use $PXT to win great prizes!
                  <br />
                  Check out what's in our latest prize draws. <br />
                  Will you be our next lucky winner?
                </p>
                <div
                  className="hero__btn wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.9s"
                >
                  <a href="#draws" className="cmn-btn">
                    View competitions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
