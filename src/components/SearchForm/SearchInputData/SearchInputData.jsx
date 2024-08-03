import { useState } from "react";

import Input from "./Input";

import { Icon, SearchInput } from "src/components/UI";

import s from "./searchInputData.module.scss";

export default function SearchInputData({ text }) {
  return (
    <div className={s.inputData}>
      <p className={s.inputData_text}>{text}</p>

      <Input type="date" nameIcon="calendar" initState="Thu, May 23" />

      <Input type="time" nameIcon="searchTime" initState="8:00 am" />
    </div>
  );
}
