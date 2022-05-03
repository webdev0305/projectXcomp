import Image from "next/image"; // Images

export default function Winanywhere() {
  return (
    <section className="overview-section pt-120">
        <div className="map-el">
          <img src="assets/images/projectx/elements/map.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-header text-center">
                <h2 className="section-title">
                  Win anywhere on the planet 24/7
                </h2>
                <p>
                  Crypto allows anyone to enter anonymously, anywhere, anytime.
                  <br />
                  Entries from other galaxies welcome!
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row end --> */}
        </div>
        {/* <!-- container end --> */}
        <div className="map-pointer">
          <div className="pointer num-1"></div>
          <div className="pointer num-2"></div>
          <div className="pointer num-3"></div>
          <div className="pointer num-4"></div>
          <div className="pointer num-5"></div>
          <div className="pointer num-6"></div>
          <div className="pointer num-7"></div>
          <div className="pointer num-8"></div>
          <div className="pointer num-9"></div>
        </div>
    </section>
  );
}