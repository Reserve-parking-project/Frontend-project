import { useState, useEffect } from "react";

import Confirmation from "./Confirmation/Confirmation.jsx";
import styles from "./SignUpPage.module.scss";

export default function SignUpPage({ inputCheck }) {
  const [resultCheck, setResultCheck] = useState(false);

  useEffect(() => {
    function hasSpecialCharacters(str) {
      const letters = str.split("");
      const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
      return letters.some((item) => regex.test(item));
    }

    const result = hasSpecialCharacters(inputCheck);
    setResultCheck(result);
  }, [inputCheck]);

  return (
    <>
      <p className={styles.text__password}>
        The password must contain at least:
      </p>
      <Confirmation
        className={
          inputCheck.length >= 1 && inputCheck[0] !== " "
            ? styles.text_active
            : styles.text
        }
        text="1 letter - Done"
      />
      <Confirmation
        className={!resultCheck ? styles.text : styles.text_active}
        text="1 number or special character (e.g., # ? ! &) - Done.,"
      />
      <Confirmation
        className={
          inputCheck.length >= 10 && inputCheck[0] !== " "
            ? styles.text_active
            : styles.text
        }
        text="10 characters"
      />
    </>
  );
}
