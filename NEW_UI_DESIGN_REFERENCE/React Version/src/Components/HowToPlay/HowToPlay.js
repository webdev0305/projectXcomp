import React from "react";

import styled from "styled-components";
const Wrapper = styled.div``;
const HowToPlay = () => {
  const data = [
    {
      img: "assets/images/elements/card-bg-1.jpg",
      icon: "assets/images/projectx/icon/play/1.png",
      title: "Buy $PXT2",
      text: " <p>Purchase PXT2 token from</p>",
    },
    {
      img: "assets/images/elements/card-bg-2.jpg",
      icon: "assets/images/icon/play/1.png",
      title: "Buy Tickets",
      text: " <p>Pick your <a href='draws'>prize draw</a> &amp; complete your purchase <p>",
    },
    {
      img: "assets/images/elements/card-bg-3.jpg",
      icon: "assets/images/icon/play/3.png",
      title: "Win",
      text: " <p>Start dreaming, you're almost there</p>",
    },
  ];
  return (
    <Wrapper>
      {" "}
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
            {data.map((el, i) => (
              <div className="col-xl-3 col-lg-4 col-sm-6 mb-30" key={i}>
                <div className="play-card bg_img" data-background={el.img}>
                  <div className="play-card__icon">
                    <img src={el.icon} alt="image-icon" />
                    <span className="play-card__number">0{i + 1}</span>
                  </div>
                  <div className="play-card__content">
                    <h3 className="play-card__title">{el.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: el.text }}></p>
                  </div>
                </div>
                {/* <!-- play-card end --> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default HowToPlay;
