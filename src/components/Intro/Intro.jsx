import IntroContent from "./IntroComponents/IntroContent/IntroContent.jsx";

import s from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={s.intro}>
      <div className="intro__container">
        <div className={s.intro__body}>
          <h1>Reserve Parking Now & Save</h1>

          <IntroContent />
        </div>
      </div>
    </section>
  );
}
