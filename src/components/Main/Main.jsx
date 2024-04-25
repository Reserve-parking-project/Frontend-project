import BlockWithMap from "./BlockWithMap/BlockWithMap";
import Intro from "./Intro/Intro";
import ItemsInfo from "./ItemsInfo/ItemsInfo";
import style from "./Main.module.scss";

export default function Main() {
  return (
    <main className={style.main}>
      <Intro />
      <ItemsInfo />
      <BlockWithMap />
    </main>
  );
}
