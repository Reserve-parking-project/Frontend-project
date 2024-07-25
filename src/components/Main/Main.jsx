import { Intro, ItemsInfo, BlockWithMap } from "../index";

import classes from "./main.module.scss";

export default function Main() {
  return (
    <main className={classes.main}>
      <Intro />
      <ItemsInfo />
      <BlockWithMap />
    </main>
  );
}
