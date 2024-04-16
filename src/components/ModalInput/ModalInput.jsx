import styles from "./ModalInput.module.scss";
import { createPortal } from "react-dom";
import { useState } from "react";
import { sendingUserData } from "../../httpRequests";

import SignUpPage from "./Autorisation/SignUpPage.jsx";
import iconEye from "../../assets/image/IconForm/icon.svg";
import LogInPage from "./Autorisation/LogInPage";
import ButtonModal from "./ButtonModal";
import CompaniesIcons from "./CompaniesIcons/CompaniesIcons";

export default function ModalInput({ open, handleClickActive }) {
  const [activeFormPage, setActiveFormPage] = useState("Log in");
  const [passwordType, setPasswordType] = useState("password");
  const [inputChecking, setInputChecking] = useState("");
  const [contentError, setContentError] = useState("");

  function hasSpecialCharacters(str) {
    const letters = str.split("");
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return letters.some((item) => regex.test(item));
  }

  const resultCheckingInput = hasSpecialCharacters(inputChecking);

  function submitForm(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.table(data);

    if (!resultCheckingInput) {
      console.log(data.password);
      setContentError("Виконайте всі умови зверху!!!");
      return;
    } else {
      setContentError("");
    }

    try {
      sendingUserData("http://localhost:3000/api/user/register", data);
    } catch (error) {
      console.log(error.message);
      return;
    }
  }

  function changeFormPage(textPage) {
    setActiveFormPage(textPage);
  }

  function changePasswordType() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function changeInputCheck(event) {
    setInputChecking(event.target.value);
    console.log(event.target.value);
  }

  return createPortal(
    <dialog className={styles.dialog} open={open}>
      <form className={styles.form} method="dialog" onSubmit={submitForm}>
        <div className={styles.tabs}>
          <ButtonModal
            className={
              activeFormPage === "Log in"
                ? `${styles.tabs__button} ${styles.active}`
                : styles.tabs__button
            }
            text="Log in"
            changePage={changeFormPage}
          />
          <ButtonModal
            className={
              activeFormPage === "Sign up"
                ? `${styles.tabs__button} ${styles.active}`
                : styles.tabs__button
            }
            text="Sign up"
            changePage={changeFormPage}
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <div className={styles.input__withIcon}>
            <input
              id="password"
              type={passwordType}
              name="password"
              required
              minLength={10}
              onChange={changeInputCheck}
              value={inputChecking}
              className={
                inputChecking.length < 10 || !resultCheckingInput
                  ? `${styles.input} ${styles.input__active}`
                  : styles.input
              }
            />
            <div onClick={changePasswordType}>
              <i aria-hidden="true">
                <img src={iconEye} alt="" />
              </i>
            </div>
          </div>
        </div>

        {activeFormPage === "Log in" && <LogInPage />}
        {activeFormPage === "Sign up" && (
          <SignUpPage inputCheck={inputChecking} />
        )}

        {inputChecking.length < 10 || !resultCheckingInput ? (
          <button className={styles.button} type="submit">
            Next
          </button>
        ) : (
          <button className={styles.button} type="submit">
            Next
          </button>
        )}

        <div>
          <p className={styles.message__error}>{contentError}</p>
        </div>

        <p className={styles.choice}>Or</p>

        <CompaniesIcons />
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
