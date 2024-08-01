import { Intro, ItemsInfo, BlockWithMap } from "..";

import s from "./main.module.scss";

export default function Main() {
  return (
    <main className={s.main}>
      <Intro />
      <ItemsInfo />
      <BlockWithMap />
    </main>
  );
}
