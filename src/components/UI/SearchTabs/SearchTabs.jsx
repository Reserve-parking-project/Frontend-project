import { Link } from "react-router-dom";

import { getMode } from "src/functions/getMode";

import s from "./searchTabs.module.scss";

export default function SearchTabs() {
  const bookingType = getMode("booking");

  return (
    <div className={s.tabs}>
      <Link
        className={`${s.tabs_link} ${bookingType === "single" ? s.active : undefined}`}
        to="/search?booking=single"
      >
        Single Booking
      </Link>
      <Link
        className={`${s.tabs_link} ${bookingType === "multiple" ? s.active : undefined}`}
        to="/search?booking=multiple"
      >
        Multiple Booking
      </Link>
    </div>
  );
}
