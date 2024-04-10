import styles from "./ModalInput.module.scss";
import { createPortal } from "react-dom";
import { useState } from "react";

import { sendingUserData } from "../../httpRequests";

export default function ModalInput({ open, handleClickActive }) {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);
  function handleSubmitForm(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.table(data);

    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }
    setPasswordsAreNotEqual(false);
    try {
      sendingUserData("http://localhost:3000/api/user/register", data);
    } catch (error) {
      console.log(error.message);
      return;
    }
  }
  return createPortal(
    <dialog open={open}>
      <form method="dialog" onSubmit={handleSubmitForm}>
        <h2>Welcome to the site for booking parking spaces!</h2>
        <p>To continue using the site, you need register</p>

        <div className={styles.inputData}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className={styles.inputData}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={8}
          />
        </div>

        <div className={styles.inputData}>
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className={styles.inputData__error}>
            {passwordsAreNotEqual && <p>Passwords are not equal!</p>}
          </div>
        </div>

        <div className={styles.inputData}>
          <label htmlFor="first-name">First name</label>
          <input id="first-name" type="text" name="first-name" required />
        </div>
        <div className={styles.inputData}>
          <label htmlFor="last-name">Last name</label>
          <input id="last-name" type="text" name="last-name" required />
        </div>

        <div className={styles.buttons}>
          <button type="submit">Sign up</button>
          <button onClick={handleClickActive} type="button">
            Cancel
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
