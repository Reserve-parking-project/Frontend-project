import { useState, memo } from "react";

import "./Header.scss";
import HeaderBurger from "./HeaderBurger";
import HeaderNavigation from "./HeaderNavigation";

export default function Header({}) {
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
