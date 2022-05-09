import React from "react";

import styled from "styled-components";
const Wrapper = styled.div``;
const ContestSection = () => {
  const contestArray = [
    {
      img: "assets/images/contest/3.png",
      CompNo: "x9u",
      cardName: "Prize One",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
    {
      img: "assets/images/contest/3.png",
      CompNo: "b2t",
      cardName: "Prize Two",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
    {
      img: "assets/images/contest/3.png",
      CompNo: "8y3",
      cardName: "Prize Three",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
    {
      img: "assets/images/contest/3.png",
      CompNo: "r9d",
      cardName: "Prize Four",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
    {
      img: "assets/images/contest/3.png",
      CompNo: "pr2",
      cardName: "Prize Five",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
    {
      img: "assets/images/contest/3.png",
      CompNo: "w03",
      cardName: "Prize Six",
      number: 5,
      cardPrice: "$PXT2",
      day: "5d",
      remaining: "99",
    },
  ];
  return (
    <Wrapper>
      {" "}
      <section className="position-relative pt-120 pb-120" id="draws">
        <div className="bg-el">
          <img src="assets/images/elements/contest-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-header text-center">
                {/* <!--<span className="section-sub-title">Try your luck</span>--> */}
                <h2 className="section-title">Current Competitions</h2>
                <p>
                  We always have a wide variety of prizes including crypto,
                  vouchers and luxury goods.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row end --> */}
          <div
            className="row wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-12">
              <div className="tab-content" id="contestTabContent">
                <div
                  className="tab-pane fade show active"
                  id="car"
                  role="tabpanel"
                  aria-labelledby="car-tab"
                >
                  <div className="row mb-none-30">
                    {contestArray.map((el, i) => (
                      <div className="col-xl-4 col-md-6 mb-30" key={i}>
                        <div className="contest-card">
                          <a href="" className="item-link"></a>
                          <div className="contest-card__thumb">
                            <img src={el.img} alt="image" />
                            <div className="contest-num">
                              <span>Comp no:</span>
                              <h4 className="number">{el.CompNo}</h4>
                            </div>
                          </div>
                          <div className="contest-card__content">
                            <div className="left">
                              <h5 className="contest-card__name">
                                {el.cardName}
                              </h5>
                            </div>
                            <div className="right">
                              <span className="contest-card__price">
                                {el.number}
                              </span>
                              <p>{el.price}</p>
                            </div>
                          </div>
                          <div className="contest-card__footer">
                            <ul className="contest-card__meta">
                              <li>
                                <i className="las la-clock"></i>
                                <span>{el.day}</span>
                              </li>
                              <li>
                                <i className="las la-ticket-alt"></i>
                                <span>{el.remaining}</span>
                                <p>Remaining</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- contest-card end --> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <!-- table content end --> */}
            </div>
          </div>
          {/* <!-- row end--> */}
        </div>
      </section>
    </Wrapper>
  );
};
export default ContestSection;
