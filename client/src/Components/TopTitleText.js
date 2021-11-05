import React from "react";
import Typewriter from "typewriter-effect";

export default function TopTitle() {
  return (
    <div className="intro-text-big mt-80">
      Lingo3D is a low-code
      <span id="gradient-span">
        <Typewriter
          options={{
            strings: [
              "web based game engine",
              "3D immersive open world",
              "programming school",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}
