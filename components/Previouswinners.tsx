import React from "react";
// import styled from "styled-components";

// const Wrapper = styled.div``;
const Testimonial = () => {
  const data = [
    {
      img: "assets/images/winner/2.png",
      name: "Joe Bloggs",
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”",
      star: 5,
    },
    {
      img: "assets/images/winner/1.png",
      name: "Joe Bloggs",
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, elit quis vehicula interdum.”",
      star: 5,
    },
  ];
  return (
    <div>
      {" "}
      <section className="has-bg--shape pt-120 pb-120">
        <div className="bg-shape">
          <div className="round-shape d-sm-block d-none">
            <img src="assets/images/elements/round-shape.png" alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-9 wow fadeInUp"
              data-wow-duration="0.5s"
              data-wow-delay="0.3s"
            >
              <div className="section-header text-center">
                <h2 className="section-title">Previous Lucky Winners</h2>
                <p>
                  Here&#39;s what some of our previous winners have to say about
                  CompetitionX
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-area">
                <div className="testimonial-slider">
                  {/* <!-- testimonial-single end --> */}
                  {data.map((el, i) => (
                    <div className="testimonial-single" key={i}>
                      <div className="testimonial-single__thumb">
                        <img src={el.img} alt="image" />
                      </div>
                      <div className="testimonial-single__content">
                        <h4 className="client-name">{el.name}</h4>
                        <p>{el.text}</p>
                        <div className="ratings">
                          {Array.from({ length: el.star }).map((el, i) => (
                            <i className="fas fa-star" key={i}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <!-- testimonial-single end --> */}
                </div>
                {/* <!-- testimonial-slider end --> */}
              </div>
              {/* <!-- testimonial-area end --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
