import classes from "./Footer.module.scss";
import InfoContent from "./InfoContent";

import { memo } from "react";
import instagramIcon from "../../assets/image/Footer/instagram.svg";
import googleIcon from "../../assets/image/Footer/google.svg";
import twitterIcon from "../../assets/image/Footer/twitter.svg";

const Footer = memo(() => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__body}>
          <InfoContent>
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

          <InfoContent>
            <h6>Sell Parking</h6>
            <ul>
              <li>
                <a href="#">Operators</a>
              </li>
              <li>
                <a href="#">Monthly Parking</a>
              </li>
              <li>
                <a href="#">Airport Parking</a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent className={classes.footer__retreat}>
            <ul>
              <li>
                <a href="#">Rent My Parking Space</a>
              </li>
              <li>
                <a href="#">Property Managers</a>
              </li>
              <li>
                <a href="#">Rent My Parking Space</a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent>
            <h6>Company/Legal</h6>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </InfoContent>

          <InfoContent>
            <h6>Book Parking</h6>
            <ul>
              <li>
                <a href="#">All Locations</a>
              </li>
              <li>
                <a href="#">Touchless Parking</a>
              </li>
            </ul>
          </InfoContent>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
