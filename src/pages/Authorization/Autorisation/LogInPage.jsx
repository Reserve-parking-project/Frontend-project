import styles from "./LoginPage.module.scss";
import { useState } from "react";

export default function LogInPage() {
  const [clickForChangePositionCircle, setClickForChangePositionCircle] =
    useState(false);

  function changePositionOfCircle() {
    setClickForChangePositionCircle((prevState) => !prevState);
  }

  return (
    <>
      <div className={styles.click__button}>
        <div
          onClick={changePositionOfCircle}
          className={
            clickForChangePositionCircle
              ? `${styles.button__body} ${styles.active}`
              : styles.button__body
          }
        >
          <div
            className={
              clickForChangePositionCircle
                ? `${styles.button__circle} ${styles.active}`
                : styles.button__circle
            }
          ></div>
        </div>

        <p>Remember me</p>
      </div>
    </>
  );
}
