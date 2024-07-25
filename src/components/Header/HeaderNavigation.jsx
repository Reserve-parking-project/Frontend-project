import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import HeaderItem from "./HeaderItem";

import s from "./header.module.scss";

export default function HeaderNavigation({ isActive }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const activeBodyScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  return (
    <nav
      className={
        !isActive ? `${s.header__menu}` : `${s.header__menu} ${s.active}`
      }
    >
      <div className={s["header__menu-body"]}>
        <ul>
          <HeaderItem path="/how-work">How does it work?</HeaderItem>
          <HeaderItem path="/contact-us">Contact us</HeaderItem>
        </ul>

        {!isAuth && (
          <Link
            onClick={activeBodyScroll}
            className={s["header__list-link"]}
            to="authentication?mode=login"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}
