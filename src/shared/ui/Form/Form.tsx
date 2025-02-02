import { FC, FormEvent } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PasswordInput from './PasswordInput';
import { login } from 'src/app/store/slices/authSlice';

import s from './form.module.scss';

import type { FormProps } from './types';

const Form: FC<FormProps> = ({
  inputChecking,
  setInputChecking,
  resultCheckingInput,
  children,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const fd = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(fd.entries());
    console.table(data);

    dispatch(login());
    navigate('/');
  };

  return (
    <form onSubmit={submitForm}>
      <div className={s.input}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" name="email" required />
      </div>

      <PasswordInput inputChecking={inputChecking} setInputChecking={setInputChecking} />

      {children}

      <button className={s.button} type="submit">
        Next
      </button>
    </form>
  );
};

export default Form;
