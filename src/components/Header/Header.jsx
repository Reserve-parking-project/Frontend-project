import { useState, useEffect } from "react";

import "./header.scss";

import HeaderBurger from "./HeaderBurger";
import HeaderNavigation from "./HeaderNavigation";

export default function Header({}) {
  const [isActive, setIsActive] = useState(false);

  // SCROLL
  const [scrolled, setScrolled] = useState(false);

  function handleClickActive() {
    setIsActive((prevState) => !prevState);

    const body = document.querySelector("body");

    if (!isActive) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={
        !isActive ? (scrolled ? "header scroll" : "header") : "header active"
      }
    >
      <div className="header__container">
        <div className="header__body">
          <a href="#" className="header__logo">
            {/* <img src="#" alt="Header logo" /> */}
          </a>

          <HeaderBurger
            handleClickActive={handleClickActive}
            stateButton={isActive}
          />

          <HeaderNavigation isActive={isActive} />
        </div>
      </div>
    </header>
  );
}
