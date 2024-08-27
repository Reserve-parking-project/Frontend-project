import { ChangeEvent, FC, useState } from 'react';

import { getResultCheckingInput } from 'src/shared/utils';
import { Icon } from 'src/shared/ui';

import s from './form.module.scss';

const PasswordInput: FC<{ inputChecking: string; setInputChecking: (value: string) => void }> = ({
  inputChecking,
  setInputChecking,
}) => {
  const [passwordType, setPasswordType] = useState('password');
  const resCheckInput = getResultCheckingInput(inputChecking);

  const changeInputCheck = (event: ChangeEvent) => {
    setInputChecking((event.target as HTMLInputElement).value);
  };

  const changePasswordType = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };

  return (
    <div className={s.input}>
      <label htmlFor="password">Password</label>
      <div className={s.input__withIcon}>
        <input
          id="password"
          type={passwordType}
          name="password"
          required
          minLength={10}
          onChange={changeInputCheck}
          value={inputChecking}
          className={
            inputChecking.length < 10 || !resCheckInput
              ? `${s.input__inner} ${s.active}`
              : s.input__inner
          }
        />

        <div onClick={changePasswordType}>
          <i aria-hidden="true">
            <Icon className={s.eye} name="icon" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
