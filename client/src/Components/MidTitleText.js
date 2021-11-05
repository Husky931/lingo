import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

export default function MidTitleText() {
  const [effectClass, setEffectClass] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 910 && y < 1750) {
      setEffectClass(true);
    } else {
      setEffectClass(false);
    }
  }, [y]);

  return (
    <div
      className={
        effectClass
          ? "intro-text-big my-50-m testAppearEffect "
          : "intro-text-big my-50-m hidden"
      }
    >
      <span className="gradient-span-2-mob">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </span>
    </div>
  );
}
