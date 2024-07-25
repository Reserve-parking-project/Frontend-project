import { AuthForm } from "../../components";
import { getMode } from "../../getFunction";
import { CompaniesIcons, ParkingDecor } from "../../components/UI";

import iconCar from "../../assets/image/IconDecor/Car.svg";
import iconDarkCar from "../../assets/image/IconDecor/DarkCar.svg";
import rightCar from "../../assets/image/IconDecor/RightCar.svg";

import classes from "./authentication.module.scss";

export default function Authentication() {
  const mode = getMode();

  return (
    <div className={classes.auth}>
      <AuthForm />

      <div className={classes.auth__links}>
        <div>
          <p className={classes.message__error}>Error</p>
        </div>

        <p className={classes.choice}>Or</p>

        <CompaniesIcons />
      </div>

      {mode === "signup" ? (
        <img src={iconDarkCar} className={classes.auth__parking_signup} />
      ) : (
        <div></div>
      )}

      <ParkingDecor
        urlCar={iconCar}
        className={
          mode === "signup"
            ? classes.auth__parking_left
            : `${classes.auth__parking_left} + ${classes.signup}`
        }
      />
      <ParkingDecor urlCar={rightCar} className={classes.auth__parking_right} />
    </div>
  );
}
