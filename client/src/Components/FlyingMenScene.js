import React, { useEffect, useRef, Suspense, useState } from "react";
import man1 from "../assets/floating_men/man1.svg";
import man2 from "../assets/floating_men/man2.svg";
import planet1 from "../assets/floating_men/planet-1.svg";
import planet2 from "../assets/floating_men/planet-2.svg";
import planet3 from "../assets/floating_men/planet-3.svg";
import FlyingMenLogo from "./FlyingMenLogo";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "react-use";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlyingMenScene() {
  const sectionRef = useRef();
  const { width } = useWindowSize();

  const [hideLogo, setHideLogo] = useState(false);

  var elementsPosition = {
    man1Div: {
      x: -58,
      y: 55,
    },
    man2Div: {
      x: 169,
      y: 80,
    },
    planet1Div: {
      x: 204,
      y: 35,
    },
    planet2Div: {
      y: 100,
    },
    planet3Div: {
      x: -200,
      z: 200,
      y: -100,
    },
  };

  useEffect(() => {
    if (width > 1070) {
      elementsPosition.man1Div.x = -58;
      elementsPosition.man1Div.y = 55;
      elementsPosition.man2Div.x = 169;
      elementsPosition.man2Div.y = 80;
      elementsPosition.planet1Div.x = 204;
      elementsPosition.planet1Div.y = 35;
      elementsPosition.planet2Div.y = 90;
      elementsPosition.planet3Div.x = -200;
      elementsPosition.planet3Div.z = 200;
      elementsPosition.planet3Div.y = -100;
    }
    if (width < 1070 && width > 979) {
      elementsPosition.man1Div.x = -55;
      elementsPosition.man1Div.y = 59;
      elementsPosition.man2Div.x = 160;
      elementsPosition.man2Div.y = 50;
    }
    if (width < 979 && width > 915) {
      elementsPosition.man1Div.x = -48;
      elementsPosition.man2Div.x = 133;
      elementsPosition.man2Div.y = 0;
    }
    if (width < 915) {
      setHideLogo(true);
    }

    gsap.to(".man1Div", {
      x: elementsPosition.man1Div.x,
      y: elementsPosition.man1Div.y,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".man2Div",
        toggleActions: "restart",
        scrub: true,
        end: "bottom 100px",
      },
    });
    gsap.to(".man2Div", {
      x: elementsPosition.man2Div.x,
      y: elementsPosition.man2Div.y,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".man2Div",
        toggleActions: "restart",
        scrub: true,
        end: "bottom 100px",
      },
    });
    gsap.to(".planet1Div", {
      x: elementsPosition.planet1Div.x,
      y: elementsPosition.planet1Div.y,
      duration: 2.5,
      rotation: 180,
      scale: 0.55,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".man2Div",
        toggleActions: "restart",
        scrub: true,
        end: "bottom 100px",
      },
    });
    gsap.to(".planet2Div", {
      y: elementsPosition.planet2Div.y,
      duration: 2.5,
      rotation: 180,
      scale: 2,
      scrollTrigger: {
        trigger: ".man2Div",
        toggleActions: "restart",
        scrub: true,
        end: "bottom 100px",
      },
    });
    gsap.to(".planet3Div", {
      x: elementsPosition.planet3Div.x,
      y: elementsPosition.planet3Div.y,
      z: elementsPosition.planet3Div.z,
      duration: 2.5,
      rotation: -180,
      scale: 0.85,
      ease: "animEase",
      scrollTrigger: {
        trigger: ".man2Div",
        toggleActions: "restart",
        scrub: true,
        end: "bottom 100px",
      },
    });
  }, [
    elementsPosition.man1Div,
    elementsPosition.man2Div,
    elementsPosition.planet1Div,
    elementsPosition.planet2Div,
    elementsPosition.planet3Div,
    width,
  ]);

  return (
    <section id={hideLogo ? "hidden" : "section3d"} ref={sectionRef}>
      <div className="man1Div">
        <img src={man1} className="man1Img" id="man1" alt="" />
      </div>
      <div className="man2Div">
        <img src={man2} className="man2Img" id="man2" alt="" />
      </div>
      <div className="planet1Div">
        <img src={planet1} className="planet1Img" id="planet1" alt="" />
      </div>
      <div className="planet2Div">
        <img src={planet2} className="planet2Img" id="planet2" alt="" />
      </div>
      <div className="planet3Div">
        <img src={planet3} className="planet3Img" id="planet3" alt="" />
      </div>
      <div className="section3dLogo">
        <Canvas>
          <ambientLight intensity={10} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Suspense fallback={FlyingMenLogo}>
            <FlyingMenLogo />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
