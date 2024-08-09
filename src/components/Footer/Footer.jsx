import InfoContent from './InfoContent';
import { Icon } from '../../shared/ui';

import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__body}>
          <InfoContent className={s.footer__content}>
            <h6>See Us</h6>
            <ul>
              <li>
                <a href="#">
                  <Icon name="instagram" className={s.footer__icon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon name="googleWhite" className={s.footer__icon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon name="twitter" className={s.footer__icon} />
                </a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={s.footer__content}>
            <h6>Sell Parking</h6>
            <ul>
              <li>
                <a href="#">
                  <p>Operators</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Monthly Parking</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Airport Parking</p>
                </a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={s.footer__retreat}>
            <ul>
              <li>
                <a href="#">
                  <p>Rent My Parking Space</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Property Managers</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Rent My Parking Space</p>
                </a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={s.footer__content}>
            <h6>Company/Legal</h6>
            <ul>
              <li>
                <a href="#">
                  <p>About Us</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Blog</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Privacy Policy</p>
                </a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={s.footer__content}>
            <h6>Book Parking</h6>
            <ul>
              <li>
                <a href="#">
                  <p>All Locations</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Touchless Parking</p>
                </a>
              </li>
            </ul>
          </InfoContent>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
