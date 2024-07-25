import { useState, useEffect } from "react";

import HeaderBurger from "./HeaderBurger";
import HeaderNavigation from "./HeaderNavigation";

import s from "./header.module.scss";

export default function Header() {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleClickActive() {
    setIsActiveBurgerMenu((prevState) => !prevState);
    console.log("Hello i'm React JS");

    if (!isActiveBurgerMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
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
        !isActiveBurgerMenu
          ? scrolled
            ? `${s.header} ${s.scroll}`
            : `${s.header}`
          : `${s.header} ${s.active}`
      }
    >
      <div className="container">
        <div className={s.header__body}>
          <a href="#" className={s.header__logo}>
            {/* <img src="#" alt="Header logo" /> */}
          </a>

          <HeaderBurger
            handleClickActive={handleClickActive}
            stateButton={isActiveBurgerMenu}
          />

          <HeaderNavigation isActive={isActiveBurgerMenu} />
        </div>
      </div>
    </header>
  );
}
