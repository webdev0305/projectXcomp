import Link from 'next/link';

export default function Wins() {
    return (
        <div className="page-wrapper">
            <div className="inner-hero-section style--five">
                <div className="bg-shape">
                    <img src="assets/images/elements/inner-hero-shape.png" alt="image"/>
                </div>
            </div>
            <div className="mt-minus-100 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-card">
                                <h3 className="user-card__name">[WALLET ADDRESS]</h3>
                            </div>
                            <div className="user-action-card">
                                <ul className="user-action-list">
                                    <li>
                                        <Link href="/draws">
                                            <a>My Draws</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/wins">
                                            <a>My Wins</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-4">
                            <div className="row mt-0  mb-none-30">
                                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                                    <div className="contest-card">
                                        <div className="contest-card__thumb">
                                            <a href="competition_detail.html" className="item-link"></a>
                                            <img src="assets/images/contest/3.png" alt="image"/>
                                                <div className="contest-num">
                                                    <span>Comp no:</span>
                                                    <h4 className="number">[ID]</h4>
                                                </div>
                                        </div>
                                        <div className="contest-card__content">
                                            <div className="left">
                                                <h5 className="contest-card__name">[DRAW TITLE]</h5>
                                            </div>
                                            <div className="right">
                                                <span className="contest-card__price">1</span>
                                                <p>tickets</p>
                                            </div>
                                        </div>
                                        <div className="contest-card__footer">
                                            <ul className="contest-card__meta">
                                                <li>
                                                    <i className="las la-clock"></i>
                                                    <span>5hrs</span>
                                                </li>
                                                <li>
                                                    <i className="las la-ticket-alt"></i>
                                                    <span>241</span>
                                                    <p>Remaining</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                                    <div className="contest-card">
                                        <div className="contest-card__thumb">
                                            <a href="competition_detail.html" className="item-link"></a>
                                            <img src="assets/images/contest/3.png" alt="image"/>
                                                <div className="contest-num">
                                                    <span>Comp no:</span>
                                                    <h4 className="number">[ID]</h4>
                                                </div>
                                        </div>
                                        <div className="contest-card__content">
                                            <div className="left">
                                                <h5 className="contest-card__name">[DRAW TITLE]</h5>
                                            </div>
                                            <div className="right">
                                                <span className="contest-card__price">2</span>
                                                <p>tickets</p>
                                            </div>
                                        </div>
                                        <div className="contest-card__footer">
                                            <ul className="contest-card__meta">
                                                <li>
                                                    <i className="las la-clock"></i>
                                                    <span>24hrs</span>
                                                </li>
                                                <li>
                                                    <i className="las la-ticket-alt"></i>
                                                    <span>199</span>
                                                    <p>Remaining</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                                    <div className="contest-card">
                                        <div className="contest-card__thumb">
                                            <a href="competition_detail.html" className="item-link"></a>
                                            <img src="assets/images/contest/3.png" alt="image"/>
                                                <div className="contest-num">
                                                    <span>Comp no:</span>
                                                    <h4 className="number">[ID]</h4>
                                                </div>
                                        </div>
                                        <div className="contest-card__content">
                                            <div className="left">
                                                <h5 className="contest-card__name">[DRAW TITLE]</h5>
                                            </div>
                                            <div className="right">
                                                <span className="contest-card__price">1</span>
                                                <p>tickets</p>
                                            </div>
                                        </div>
                                        <div className="contest-card__footer">
                                            <ul className="contest-card__meta">
                                                <li>
                                                    <i className="las la-clock"></i>
                                                    <span>2hrs</span>
                                                </li>
                                                <li>
                                                    <i className="las la-ticket-alt"></i>
                                                    <span>34</span>
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
    );
}