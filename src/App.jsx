import { useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import ModalInput from "./components/ModalInput/ModalInput";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleClickActive() {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <>
      <Header handleClickModal={handleClickActive} />
      <ModalInput open={openModal} handleClickActive={handleClickActive} />
      <Main />
    </>
  );
}
