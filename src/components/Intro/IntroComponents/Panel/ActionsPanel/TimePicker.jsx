import { useRef, useState } from "react";
import { Icon } from "../../../../UI";

import s from "./actionsPanel.module.scss";

export default function TimePicker() {
  const inputTime = useRef(null);
  const [userTime, setUserTime] = useState("00:00");

  function handlePickedTime() {
    inputTime.current.showPicker();
  }

  function handleChangeTime(event) {
    setUserTime(event.target.value);
  }

  return (
    <>
      <div className={s.actionsPanel__time}>
        <button type="button" onClick={handlePickedTime}>
          <Icon name="time" />
        </button>

        <input onChange={handleChangeTime} type="time" ref={inputTime} />
        <p>{userTime}</p>
      </div>
    </>
  );
}
