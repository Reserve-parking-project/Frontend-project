import styles from "./SearchingBooking.module.scss";

import icon from "../../assets/image/SearchingPage/icon-language.svg";

const SearchingBooking = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <p>LOGO</p>

          <button type="button">Log in</button>

          <img src={icon} alt="Icon choice language" />
        </div>
      </header>
    </>
  );
};

export default SearchingBooking;
