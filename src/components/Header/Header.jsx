import { useState } from "react";

import Button from "../Button";
import "./Header.scss";
import HeaderItem from "./HeaderItem";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClickActive() {
    setIsActive((prevState) => !prevState);
  }

  return (
    <header className={!isActive ? "header" : "header active"}>
      <div className="header__container">
        <div className="header__body">
          <a href="#" className="header__logo">
            {/* <img src="#" alt="Header logo" /> */}
          </a>

          <div
            onClick={handleClickActive}
            className={!isActive ? "header__burger" : "header__burger active"}
          >
            <span></span>
          </div>

          <nav className={!isActive ? "header__menu" : "header__menu active"}>
            <ul className="header__list">
              <HeaderItem>How does it work?</HeaderItem>
              <HeaderItem>Contact us</HeaderItem>

              <Button className="header__list-button">Log in</Button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
