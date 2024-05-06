import classes from "./ErrorPage.module.scss";
import errorIcon from "../../assets/image/ErrorPage/error icon.svg";
import ArrowExit from "../ReusableComponents/ArrowExit";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={classes.error}>
      <ArrowExit />

      <h1>Oops, something went wrong</h1>
      <img src={errorIcon} alt="" />
    </div>
  );
};

export default ErrorPage;
