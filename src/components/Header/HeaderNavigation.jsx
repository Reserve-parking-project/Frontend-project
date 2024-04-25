import Button from "../Button";
import HeaderItem from "./HeaderItem";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/store";

export default function HeaderNavigation({ isActive }) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleClickModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <nav className={!isActive ? "header__menu" : "header__menu active"}>
      <div className="header__menu-body">
        <ul className="menu-body__list">
          <HeaderItem>How does it work?</HeaderItem>
          <HeaderItem>Contact us</HeaderItem>
        </ul>
        {!isAuth && (
          <Button onClick={handleClickModal} className="header__list_button">
            Log in
          </Button>
        )}
      </div>
    </nav>
  );
}
