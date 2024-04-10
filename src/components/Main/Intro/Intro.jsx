import styles from "./Intro.module.scss";
import IntroContent from "./IntroComponents/IntroContent/IntroContent.jsx";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="intro__container">
        <div className={styles.intro__body}>
          <h1 className={styles.intro__title}>Reserve Parking Now & Save</h1>

          <IntroContent />
        </div>
      </div>
    </section>
  );
}
