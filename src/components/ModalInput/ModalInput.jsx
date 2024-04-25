import styles from "./ModalInput.module.scss";
import { createPortal } from "react-dom";
import { useState } from "react";
import { sendingUserData } from "../../httpRequests";

import SignUpPage from "./Autorisation/SignUpPage.jsx";
import iconEye from "../../assets/image/IconForm/icon.svg";
import LogInPage from "./Autorisation/LogInPage";
import ButtonModal from "./ButtonModal";
import CompaniesIcons from "./CompaniesIcons/CompaniesIcons";
import Button from "../Button";

// REDUX DATA
import { useDispatch, useSelector } from "react-redux";
import { modalActions, authActions } from "../../store/store.js";

export default function ModalInput({}) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const [activeFormPage, setActiveFormPage] = useState("Log in");
  const [passwordType, setPasswordType] = useState("password");
  const [inputChecking, setInputChecking] = useState("");
  const [contentError, setContentError] = useState("");

  const hasSpecialCharacters = (str) => {
    const letters = str.split("");
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return letters.some((item) => regex.test(item));
  };
  const resultCheckingInput = hasSpecialCharacters(inputChecking);

  const closeDialog = () => {
    dispatch(modalActions.closeModal());
  };

  const submitForm = (event) => {
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

    // try {
    //   sendingUserData("http://localhost:3000/api/user/register", data);
    // } catch (error) {
    //   console.log(error.message);
    //   return;
    // }

    dispatch(authActions.login());
    dispatch(modalActions.closeModal());
  };

  const changeFormPage = (textPage) => {
    setActiveFormPage(textPage);
  };

  const changePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const changeInputCheck = (event) => {
    setInputChecking(event.target.value);
    console.log(event.target.value);
  };

  return createPortal(
    <dialog className={styles.dialog} open={isOpen}>
      <form className={styles.form} method="dialog" onSubmit={submitForm}>
        <Button
          className={styles.form__close}
          onClick={closeDialog}
          type="button"
        >
          <p>{"<"}</p>
        </Button>

        <div className={styles.form__body}>
          <div className={styles.tabs}>
            <ButtonModal
              type="button"
              className={
                activeFormPage === "Log in"
                  ? `${styles.tabs__button} ${styles.active}`
                  : styles.tabs__button
              }
              text="Log in"
              changePage={changeFormPage}
            />
            <ButtonModal
              type="button"
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

          <div className={styles.form__auth}>
            <button className={styles.button} type="submit">
              Next
            </button>

            <div>
              <p className={styles.message__error}>{contentError}</p>
            </div>

            <p className={styles.choice}>Or</p>

            <CompaniesIcons />
          </div>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
