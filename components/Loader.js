import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .blob-loader {
    font-family: "Pacifico", cursive;
    position: relative;
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
  }
  .blob-loader::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: -moz-linear-gradient(50deg, #ec1379 0%, #6c0092 100%);
    background-image: -webkit-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
    background-image: -ms-linear-gradient(7deg, #ec1379 0%, #6c0092 100%);
    box-sizing: border-box;
    border-top: 15px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    /* Will use later for text color */
    color: #1d1e22;
    background-color: currentColor;
  }
`;

const LoadingComponent = () => {
  return (
    <Wrapper>
      <div className="blob-loader">Loading...</div>
    </Wrapper>
  );
};
export default LoadingComponent;
