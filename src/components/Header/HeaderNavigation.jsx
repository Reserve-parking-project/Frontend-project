import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./header.module.scss";

import HeaderItem from "./HeaderItem";

export default function HeaderNavigation({ isActive }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const activeBodyScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  return (
    <nav
      className={
        !isActive
          ? `${classes.header__menu}`
          : `${classes.header__menu} ${classes.active}`
      }
    >
      <div className={classes["header__menu-body"]}>
        <ul className={classes["menu-body__list"]}>
          <HeaderItem>How does it work?</HeaderItem>
          <HeaderItem>Contact us</HeaderItem>
        </ul>
        {!isAuth && (
          <Link
            onClick={activeBodyScroll}
            className={classes["header__list_link"]}
            to="authorization"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}
