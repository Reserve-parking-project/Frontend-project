import { Intro, ItemsInfo, BlockWithMap } from "../index";

import classes from "./main.module.scss";

import { getData } from "../../httpRequests";

export default function Main() {
  return (
    <main className={classes.main}>
      <Intro />
      <ItemsInfo />
      <BlockWithMap />
    </main>
  );
}
