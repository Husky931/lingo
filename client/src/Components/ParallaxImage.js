import React, { useEffect } from "react";

import base from "../assets/parallax-img/base.jpeg";
import panelTop from "../assets/parallax-img/panel-top.jpeg";
import theEye from "../assets/theeye.svg";

export default function ParallaxImage({
  tiltClass,
  setTiltClass,
  startEffect,
  setStartEffect,
}) {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setTiltClass(window.scrollY > 20 && window.scrollY < 600 ? true : false);
      setStartEffect(
        window.scrollY > 300 && window.scrollY < 600 ? true : false
      );
    });
  });
  return (
    <div className="parallax-container">
      <div className="mockup" id="mockup">
        <div
          className={
            tiltClass ? "mockup-inner transform-effect" : "mockup-inner"
          }
        >
          <div className="images-group">
            <div className="images-group-holding">
              <img
                src={panelTop}
                alt=""
                className={
                  startEffect
                    ? "panel-top transform-effect-panelTop"
                    : "panel-top"
                }
              />
            </div>
            <img
              src={base}
              alt=""
              className={startEffect ? "base-img base-img-opacity" : "base-img"}
            />
          </div>
          <div className={startEffect ? "mockup-text-box" : "hidden"}>
            <img src={theEye} alt="" className="mockup-text-box-img" />
            <h1 className="mockup-text-title">
              Natively multiplayer, built for the age of seamless online
              experiences
            </h1>
            <p className="mockup-text">
              Lingo3D has built-in multiplayer support: complex tasks such as
              establishing lobbies, synchronization of player states, and
              live-streaming virtual events, can be done without any coding
              experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
