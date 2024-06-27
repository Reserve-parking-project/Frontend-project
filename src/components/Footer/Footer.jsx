import classes from "./footer.module.scss";
import InfoContent from "./InfoContent";

import instagramIcon from "../../assets/image/Footer/instagram.svg";
import googleIcon from "../../assets/image/Footer/google.svg";
import twitterIcon from "../../assets/image/Footer/twitter.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__body}>
          <InfoContent className={classes.footer__content}>
            <h6>See Us</h6>
            <ul>
              <li>
                <a href="#">
                  <img src={instagramIcon} alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={googleIcon} alt="Google icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterIcon} alt="Twitter icon" />
                </a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={classes.footer__content}>
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

          <InfoContent className={classes.footer__retreat}>
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

          <InfoContent className={classes.footer__content}>
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

          <InfoContent className={classes.footer__content}>
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
