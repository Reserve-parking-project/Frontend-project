import { useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import ModalInput from "./components/ModalInput/ModalInput";

export default function App() {
  return (
    <>
      <Header  />
      <ModalInput />
      <Main />
    </>
  );
}
