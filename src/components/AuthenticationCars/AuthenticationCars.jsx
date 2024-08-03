import { Icon, ParkingDecor } from "src/components/UI";
import { getMode } from "src/functions/getMode";

import s from "./authenticationCars.module.scss";

export default function AuthenticationCars() {
  const mode = getMode("mode");
  
  return (
    <div className={s.cars}>
      <div className={s.cars__parking}>
        {mode === "signup" ? (
          <Icon name="darkCar" className={s.cars__darkCar} />
        ) : (
          <></>
        )}

        <ParkingDecor
          className={
            mode === "signup" ? `${s.cars__left} ${s.signup}` : s.cars__left
          }
        >
          <Icon name="car" className={s.cars__icon} />
        </ParkingDecor>
      </div>

      <ParkingDecor className={s.cars__right}>
        <Icon name="rightCar" className={s.svg} />
      </ParkingDecor>
    </div>
  );
}
