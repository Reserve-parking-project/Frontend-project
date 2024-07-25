import { useState } from "react";

import FormComponent from "../Form";

import s from "./loginPage.module.scss";

export default function LogInPage() {
  const [clickForChangePositionCircle, setClickForChangePositionCircle] =
    useState(false);

  const [inputChecking, setInputChecking] = useState("");

  const hasSpecialCharacters = (str) => {
    const letters = str.split("");
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return letters.some((item) => regex.test(item));
  };
  const resultCheckingInput = hasSpecialCharacters(inputChecking);

  function changePositionOfCircle() {
    setClickForChangePositionCircle((prevState) => !prevState);
  }

  return (
    <>
      <FormComponent
        inputChecking={inputChecking}
        setInputChecking={setInputChecking}
        resultCheckingInput={resultCheckingInput}
      >
        <div className={s.click__button}>
          <div
            onClick={changePositionOfCircle}
            className={
              clickForChangePositionCircle
                ? `${s.button__body} ${s.active}`
                : s.button__body
            }
          >
            <div
              className={
                clickForChangePositionCircle
                  ? `${s.button__circle} ${s.active}`
                  : s.button__circle
              }
            ></div>
          </div>

          <p>Remember me</p>
        </div>
      </FormComponent>
    </>
  );
}
