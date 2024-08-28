import { useState } from "react";

export default function PanelInput() {
  const [inputValue, setInputValue] = useState("");

  function trackingUserInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Address, place or city"
      onChange={trackingUserInput}
      value={inputValue}
    />
  );
}
