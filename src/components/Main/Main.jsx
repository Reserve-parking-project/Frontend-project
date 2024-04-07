import Intro from "./Intro/Intro";
import style from "./Main.module.scss";

export default function Main() {
  return (
    <main className={style.main}>
      <Intro />
    </main>
  );
}
