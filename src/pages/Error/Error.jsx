import { Link } from "react-router-dom";

import classes from "./errorPage.module.scss";

import errorIcon from "../../assets/image/ErrorPage/error icon.svg";
import ArrowExit from "../../components/UI/ArrowExit";

const ErrorPage = () => {
  console.log(window.location.href);

  // document.body.style.backgroundColor = "transparent";

  return (
    <div className={classes.error}>
      <ArrowExit />

      <h1>Oops, something went wrong</h1>
      <img src={errorIcon} alt="" />
    </div>
  );
};

export default ErrorPage;
