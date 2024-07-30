import { useRef, useState } from "react";

import { Icon } from "../../../../UI";

import s from "./actionsPanel.module.scss";

export default function DatePicker({ name }) {
  const [userDate, setUserDate] = useState({
    day: "00",
    month: "00",
    year: "24",
  });
  const inputDate = useRef(null);

  function handlePickClick() {
    inputDate.current.showPicker();
  }

  function handleChangeDate(event) {
    setUserDate((prevState) => {
      const date = event.target.value.split("-");

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
          <Icon name="date" />
        </button>

        <input
          onChange={handleChangeDate}
          ref={inputDate}
          type="date"
          name={name}
          id={name}
        />
        <p>{`${userDate.day}/${userDate.month}/${userDate.year}`}</p>
      </div>
    </>
  );
}
