import classNames from "classnames";
import Image from "next/image";
// import styles from "styles/components/Hero.module.scss"

export default function LuckyWinners() {
    return (
        <section className="has-bg--shape pt-120 pb-120">
          <div className="bg-shape">
            <div className="round-shape sm:block none">
              <img src="assets/images/elements/round-shape.png" alt="image" />
            </div>
          </div>
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-9 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div className="section-header text-center">
                  <h2 className="section-title">Previous Lucky Winners</h2>
                  <p>Here's what some of our previous winners have to say about CompetitionX</p>
                </div>
              </div>
            </div>
            <div className="row justify-center">
              <div className="lg:w-2/3 py-4">
                <div className="testimonial-area">
                  <div className="testimonial-slider slick-initialized slick-slider slick-vertical">
                    <div className="slick-list draggable" style={{height: "277.781px"}}>
                      <div className="slick-track" style={{opacity: 1, height: "1389px", transform: "translate3d(0px, 0px, 0px)"}}>
                        <div className="testimonial-single slick-slide slick-cloned md:w-[630px] w-[303px]" data-slick-index="-1" id="" aria-hidden="true" >
                          <div className="testimonial-single__thumb">
                            <img src="assets/images/winner/1.png" alt="image" />
                          </div>
                          <div className="testimonial-single__content">
                            <h4 className="client-name">Joe Bloggs</h4>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”</p>
                            <div className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-single slick-slide md:w-[630px] w-[303px]" data-slick-index="0" aria-hidden="false">
                          <div className="testimonial-single__thumb">
                            <img src="assets/images/winner/2.png" alt="image" />
                          </div>
                          <div className="testimonial-single__content">
                            <h4 className="client-name">Joe Bloggs</h4>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”</p>
                            <div className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-single slick-slide md:w-[630px] w-[303px]" data-slick-index="1" aria-hidden="true">
                          <div className="testimonial-single__thumb">
                            <img src="assets/images/winner/1.png" alt="image" />
                          </div>
                          <div className="testimonial-single__content">
                            <h4 className="client-name">Joe Bloggs</h4>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”</p>
                            <div className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-single slick-slide slick-cloned md:w-[630px] w-[303px]" data-slick-index="2" id="" aria-hidden="true">
                          <div className="testimonial-single__thumb">
                            <img src="assets/images/winner/2.png" alt="image" />
                          </div>
                          <div className="testimonial-single__content">
                            <h4 className="client-name">Joe Bloggs</h4>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”</p>
                            <div className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-single slick-slide slick-cloned md:w-[630px] w-[303px]" data-slick-index="3" id="" aria-hidden="true">
                          <div className="testimonial-single__thumb">
                            <img src="assets/images/winner/1.png" alt="image" />
                          </div>
                          <div className="testimonial-single__content">
                            <h4 className="client-name">Joe Bloggs</h4>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”</p>
                            <div className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
