import { Link } from "react-router-dom";

import { getMode } from "../../getFunction";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";

import { ArrowExit } from "../UI";

import s from "./authForm.module.scss";

export default function AuthForm() {
  const mode = getMode();

  return (
    <div className={s.form}>
      <ArrowExit className={s.form__arrow} />

      <div className={s.form__body}>
        <div className={s.tabs}>
          <Link
            className={
              mode === "login"
                ? `${s.tabs__button} ${s.active}`
                : s.tabs__button
            }
            to="?mode=login"
          >
            Log in
          </Link>
          <Link
            className={
              mode === "signup"
                ? `${s.tabs__button} ${s.active}`
                : s.tabs__button
            }
            to="?mode=signup"
          >
            Sign up
          </Link>
        </div>

        {mode === "login" && <LogInPage />}
        {mode === "signup" && <SignUpPage />}
      </div>
    </div>
  );
}
