import { AuthenticationCars, AuthForm } from "src/components";
import { CompaniesIcons } from "src/components/UI";

import s from "./authentication.module.scss";

export default function Authentication() {
  return (
    <div className={s.auth}>
      <AuthForm />

      <div className={s.auth__links}>
        <div>
          <p className={s.message__error}>Error</p>
        </div>

        <p className={s.choice}>Or</p>

        <CompaniesIcons />
      </div>

      <AuthenticationCars />
    </div>
  );
}
