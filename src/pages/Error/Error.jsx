import errorIcon from "../../assets/image/ErrorPage/error icon.svg";
import { ArrowExit } from "../../components/UI";

import s from "./errorPage.module.scss";

const ErrorPage = () => {
  console.log(window.location.href);

  // document.body.style.backgroundColor = "transparent";

  return (
    <div className={s.error}>
      <ArrowExit />

      <h1>Oops, something went wrong</h1>
      <img src={errorIcon} alt="" />
    </div>
  );
};

export default ErrorPage;
