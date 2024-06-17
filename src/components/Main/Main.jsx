import BlockWithMap from "./BlockWithMap/BlockWithMap";
import Intro from "./Intro/Intro";
import ItemsInfo from "./ItemsInfo/ItemsInfo";
import classes from "./main.module.scss";

import { getData } from "../../httpRequests";
import { useEffect, useState } from "react";

export default function Main() {
  // const [cars, setCars] = useState();

  // useEffect(() => {
  //   // Fetching cars
  // }, []);

  return (
    <main className={classes.main}>
      <Intro />
      <ItemsInfo />
      <BlockWithMap />
    </main>
  );
}
