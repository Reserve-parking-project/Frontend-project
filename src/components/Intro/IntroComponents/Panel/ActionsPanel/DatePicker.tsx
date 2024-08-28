import { ChangeEvent, FC, useRef, useState } from 'react';

import { Icon } from 'src/shared/ui';

import s from './actionsPanel.module.scss';

const DatePicker: FC<{ name: string }> = ({ name }) => {
  const [userDate, setUserDate] = useState({
    day: '00',
    month: '00',
    year: '24',
  });
  const inputDate = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (inputDate.current) {
      inputDate.current.showPicker();
    }
  }

  function handleChangeDate(event: ChangeEvent<HTMLInputElement>) {
    setUserDate((prevState) => {
      const date = event.target.value.split('-');

      return {
        day: date[2],
        month: date[1],
        year: date[0],
      };
    });
  }

  return (
    <>
      <div className={s.actionsPanel__date}>
        <button type="button" onClick={handlePickClick}>
          <Icon name="date" className={s.actionsPanel__icon} />
        </button>

        <input onChange={handleChangeDate} ref={inputDate} type="date" name={name} id={name} />
        <p>{`${userDate.day}/${userDate.month}/${userDate.year}`}</p>
      </div>
    </>
  );
};

export default DatePicker;
