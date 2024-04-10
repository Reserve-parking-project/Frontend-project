import Button from "../Button";
import HeaderItem from "./HeaderItem";

export default function HeaderNavigation({ isActive, handleClickModal }) {
  return (
    <nav className={!isActive ? "header__menu" : "header__menu active"}>
      <ul className="header__list">
        <HeaderItem>How does it work?</HeaderItem>
        <HeaderItem>Contact us</HeaderItem>

        <Button onClick={handleClickModal} className="header__list_button">
          Log in
        </Button>
      </ul>
    </nav>
  );
}
