import React, { Suspense } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo3D from "../Components/Logo3D";
import { Canvas } from "@react-three/fiber";

function Navigation({ openMenu, setOpenMenu }) {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div className="logo-box">
            <Canvas>
              <ambientLight intensity={3} />
              <directionalLight color="white" position={[0, 0, 5]} />
              <pointLight position={[10, 10, 10]} />
              <spotLight position={[10, 15, 10]} angle={0.3} />
              <Suspense fallback={Logo3D}>
                <Logo3D />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div className="header-right">
          <nav className={openMenu ? "open" : "flex-end"}>
            <a href="/" className={openMenu ? "nav-a-hamburger" : "nav-text"}>
              Lingo3D
            </a>
            <a href="/" className={openMenu ? "nav-a-hamburger" : "nav-text"}>
              Product Features
            </a>
            <a href="/" className={openMenu ? "nav-a-hamburger" : "nav-text"}>
              Book an experience
            </a>
          </nav>
          <div
            className="hamburger-menu"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="hamburger-menu-holder">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
