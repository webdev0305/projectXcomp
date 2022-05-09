import { useEffect } from "react";
import ContestSection from "./Components/ContestSection/ContestSection";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import HowToPlay from "./Components/HowToPlay/HowToPlay";
import OverView from "./Components/OverView/OverView";
import Testimonial from "./Components/Testimonial/Testomonial";
import LoadingComponent from "./Components/Loader/Loader";

function App() {
  return (
    <>
      <div className="preloader">
        <LoadingComponent />{" "}
      </div>
      <div className="page-wrapper">
        <Header />
        <HeroSection />
        <HowToPlay />
        <ContestSection />
        <OverView />
        <Feature />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
