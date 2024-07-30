import { useDispatch } from "react-redux";

import PasswordInput from "./PasswordInput";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

import s from "./authForm.module.scss";

export default function FormComponent(props) {
  const { children, inputChecking, setInputChecking } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.table(data);

    dispatch(login());
    navigate("/");
  };

  return (
    <form onSubmit={submitForm}>
      <div className={s.input}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" name="email" required />
      </div>

      <PasswordInput
        inputChecking={inputChecking}
        setInputChecking={setInputChecking}
      />

      {children}

      <button className={s.button} type="submit">
        Next
      </button>
    </form>
  );
}
