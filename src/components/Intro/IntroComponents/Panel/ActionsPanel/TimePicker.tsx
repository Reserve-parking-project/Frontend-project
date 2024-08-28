import { ChangeEvent, useRef, useState } from 'react';
import { Icon } from 'src/shared/ui';

import s from './actionsPanel.module.scss';

export default function TimePicker() {
  const inputTime = useRef<HTMLInputElement>(null);
  const [userTime, setUserTime] = useState<string>('00:00');

  function handlePickedTime() {
    if (inputTime.current) {
      inputTime.current.showPicker();
    }
  }

  function handleChangeTime(event: ChangeEvent<HTMLInputElement>) {
    setUserTime(event.target.value);
  }

  return (
    <>
      <div className={s.actionsPanel__time}>
        <button type="button" onClick={handlePickedTime}>
          <Icon name="time" className={s.actionsPanel__icon} />
        </button>

        <input onChange={handleChangeTime} type="time" ref={inputTime} />
        <p>{userTime}</p>
      </div>
    </>
  );
}
