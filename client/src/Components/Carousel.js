import React from "react";
import { Carousel } from "3d-react-carousal";
import cyberPunk1 from "../assets/cyberpunk-sh-01.webp";
import cyberPunk2 from "../assets/cyberpunk-sh-02.webp";
import cyberPunk3 from "../assets/cyberpunk-sh-03.webp";

export default function CarouselDiv() {
  let slides = [
    <img src={cyberPunk1} alt="3d user generated shanghai 1" />,
    <img src={cyberPunk2} alt="3d user generated shanghai 2" />,
    <img src={cyberPunk3} alt="3d user generated shanghai 3" />,
  ];

  return (
    <div className="carousel-holder">
      <Carousel slides={slides} interval={4000} />
    </div>
  );
}
