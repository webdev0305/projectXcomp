import Link from 'next/link';

export default function Draws() {
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
                                <div className="col-lg-12 mb-30">
                                    <div className="winner-card mb-30">
                                        <div className="winner-card__thumb">
                                            <img src="assets/images/contest/3.png" alt="image" />
                                        </div>
                                        <div className="winner-card__content">
                                            <div className="content-top">
                                                <div className="left">
                                                    <h5>[DRAW TITLE]</h5>
                                                </div>
                                                <div className="right">
                                                    <span>Draw took place on</span>
                                                    <p>12th June 2022</p>
                                                </div>
                                            </div>
                                            <div className="content-bottom">
                                                <div className="number-list-wrapper">
                                                    <p>You won!</p>
                                                    <p>Claim instructions goes here</p>
                                                </div>
                                                <div className="right">
                                                    <p>Comp No:</p>
                                                    <span className="contest-num">[ID]</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="winner-card mb-30">
                                        <div className="winner-card__thumb">
                                            <img src="assets/images/contest/3.png" alt="image" />
                                        </div>
                                        <div className="winner-card__content">
                                            <div className="content-top">
                                                <div className="left">
                                                    <h5>[DRAW TITLE]</h5>
                                                </div>
                                                <div className="right">
                                                    <span>Draw took place on</span>
                                                    <p>12th June 2022</p>
                                                </div>
                                            </div>
                                            <div className="content-bottom">
                                                <div className="number-list-wrapper">
                                                    <p>You won!</p>
                                                    <p>Claim instructions goes here</p>
                                                </div>
                                                <div className="right">
                                                    <p>Comp No:</p>
                                                    <span className="contest-num">[ID]</span>
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
        </div>
    );
}