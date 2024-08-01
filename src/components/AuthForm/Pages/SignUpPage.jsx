import { useState } from "react";

import FormComponent from "../Form";
import { resultCheckingInput } from "src/functions/getResultCheckInput";
import { Confirmation } from "src/components/UI";

import s from "./signUpPage.module.scss";

export default function SignUpPage() {
  const [inputChecking, setInputChecking] = useState("");
  const resCheckInput = resultCheckingInput(inputChecking);

  return (
    <FormComponent
      inputChecking={inputChecking}
      setInputChecking={setInputChecking}
    >
      <p className={s.text__password}>The password must contain at least:</p>

      <Confirmation
        className={
          inputChecking.length >= 1 && inputChecking[0] !== " "
            ? s.text_active
            : s.text
        }
        text="1 letter - Done"
      />
      <Confirmation
        className={!resCheckInput ? s.text : s.text_active}
        text="1 number or special character (e.g., # ? ! &) - Done.,"
      />
      <Confirmation
        className={
          inputChecking.length >= 10 && inputChecking[0] !== " "
            ? s.text_active
            : s.text
        }
        text="10 characters"
      />
    </FormComponent>
  );
}
