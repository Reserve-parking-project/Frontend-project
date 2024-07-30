import { Icon } from "../../components/UI";

import styles from "./searchParking.module.scss";

const SearchingBooking = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <p>LOGO</p>

          <button type="button">Log in</button>

          <Icon name="icon-language" />
        </div>
      </header>
    </>
  );
};

export default SearchingBooking;
