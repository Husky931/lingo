import React, { useState } from "react";
import TopTitle from "./Components/TopTitleText";
import ParallaxImage from "./Components/ParallaxImage";
import CarouselDiv from "./Components/Carousel";
import VideoSection from "./Components/VideoSection";
import FlyingMenScene from "./Components/FlyingMenScene";
import SignUpAreaNew from "./Components/SignUpAreaNew";
import Navigation from "./navigation";
import Footer from "./footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [tiltClass, setTiltClass] = useState(false);
  const [startEffect, setStartEffect] = useState(false);

  return (
    <div className="container">
      <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <TopTitle />

      <ParallaxImage
        tiltClass={tiltClass}
        setTiltClass={setTiltClass}
        startEffect={startEffect}
        setStartEffect={setStartEffect}
      />
      <div className="mid-section-start">
        <VideoSection />
        <CarouselDiv />
        <FlyingMenScene />
        <SignUpAreaNew />
      </div>
      <Footer />
    </div>
  );
}
export default App;
