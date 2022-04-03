import classNames from "classnames";
import Image from "next/image";
// import styles from "styles/components/HowToPlay.module.scss"

export default function CurrentCompetitions() {
    return (
    <section className="position-relative pt-120 pb-120" id="draws">
        <div className="bg-el"><img src="/assets/images/elements/contest-bg.png" alt="image" /></div>
        <div className="container">
            <div className="flex justify-center">
            <div className="lg:w-2/3 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div className="section-header text-center">
                
                <h2 className="section-title">Current Competitions</h2>
                <p>We always have a wide variety of prizes including crypto, vouchers and luxury goods.</p>
                </div>
            </div>
            </div>
            <div className="flex wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
            <div className="lg:w-full">
                <div className="tab-content" id="contestTabContent">
                <div className="tab-pane fade show active" id="car" role="tabpanel" aria-labelledby="car-tab">
                    <div className="flex flex-wrap w-full -mb-none-30">
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image" />
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">b2t</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize One</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image" />
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">x9u</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize two</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image"/>
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">8y3</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize three</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image"/>
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">r9d</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize four</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image"/>
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">pr2</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize five</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 mb-30 p-4">
                            <div className="contest-card">
                            <a href="" className="item-link"></a>
                            <div className="contest-card__thumb">
                                <img src="/assets/images/contest/3.png" alt="image"/>
                                <div className="contest-num">
                                <span>Comp no:</span>
                                <h4 className="number">w03</h4>
                                </div>
                            </div>
                            <div className="contest-card__content">
                                <div className="left">
                                <h5 className="contest-card__name">Prize six</h5>
                                </div>
                                <div className="right">
                                <span className="contest-card__price">5</span>
                                <p>$PXT2</p>
                                </div>
                            </div>
                            <div className="contest-card__footer">
                                <ul className="contest-card__meta">
                                <li>
                                    <i className="las la-clock"></i>
                                    <span>5d</span>
                                </li>
                                <li>
                                    <i className="las la-ticket-alt"></i>
                                    <span>99</span>
                                    <p>Remaining</p>
                                </li>
                                </ul>
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
    )}