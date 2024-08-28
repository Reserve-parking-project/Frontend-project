import IntroContent from './IntroComponents/IntroContent/IntroContent.js';

import s from './intro.module.scss';

const Intro = () => {
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
};

export default Intro;
