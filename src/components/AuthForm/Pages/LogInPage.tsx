import { useState } from 'react';

import { Form } from 'src/shared/ui';
import { getResultCheckingInput } from 'src/shared/utils';

import s from './loginPage.module.scss';

export default function LogInPage() {
  const [clickForChangePositionCircle, setClickForChangePositionCircle] = useState(false);
  const [inputChecking, setInputChecking] = useState('');
  const resultCheckingInput = getResultCheckingInput(inputChecking);

  function changePositionOfCircle() {
    setClickForChangePositionCircle((prevState) => !prevState);
  }

  return (
    <>
      <Form
        inputChecking={inputChecking}
        setInputChecking={setInputChecking}
        resultCheckingInput={resultCheckingInput}
      >
        <div className={s.click__button}>
          <div
            onClick={changePositionOfCircle}
            className={
              clickForChangePositionCircle ? `${s.button__body} ${s.active}` : s.button__body
            }
          >
            <div
              className={
                clickForChangePositionCircle ? `${s.button__circle} ${s.active}` : s.button__circle
              }
            ></div>
          </div>

          <p>Remember me</p>
        </div>
      </Form>
    </>
  );
}
