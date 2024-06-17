import HeaderItem from "./HeaderItem";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderNavigation({ isActive }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const activeBodyScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  return (
    <nav className={!isActive ? "header__menu" : "header__menu active"}>
      <div className="header__menu-body">
        <ul className="menu-body__list">
          <HeaderItem>How does it work?</HeaderItem>
          <HeaderItem>Contact us</HeaderItem>
        </ul>
        {!isAuth && (
          <Link
            onClick={activeBodyScroll}
            className="header__list_link"
            to="authorization"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}
