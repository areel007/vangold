import "./footer.css";
import { Link } from "react-router-dom";
import Twitter from "../../../assets/images/svgicons/Path-2.svg";
import Linkedln from "../../../assets/images/svgicons/Path-5.svg";
import Instagram from "../../../assets/images/svgicons/Path.svg";
import Youtube from "../../../assets/images/svgicons/Path-3.svg";
import footerLogo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          <div className="logo-container">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer logo" />
              <h2>Vangold</h2>
            </div>
            <div className="footer__text">
              <p>We match you with top professionals in whatever
                  field you required to help you scale your business and increase revenue for you. </p>
            </div>
          </div>
          <div className="footer-links-container">
            <div className="footer__links">
              <h2>RESOURCE</h2>
              <div className="ul">
                <li>
                  <Link to="/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </div>
            </div>
            <div className="footer__links">
              <h2>SUPPORT</h2>
              <div className="ul">
                <li>
                  <Link to="/Faqs">FAQ’s</Link>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="mailto:support@vangoldservices.com">Feedback</a>
                </li>
                <li>
                  <a target="_blank" href="http://Vangoldfinance.medium.com">Blog</a>
                </li>
              </div>
            </div>
          </div>
          <div className="footer__contacts">
            <h2>CONTACTS</h2>
              <p>Email: support@vangoldservices.com</p>
              <div className="footer__contacts-icons">
              <a target="_blank" href="https://twitter.com/vangoldservices">
                <div className="icon_box">
                  <img src={Twitter} alt="Twitter" />
                </div>
              </a>
              <a target="_blank" href="https://instagram.com/vangoldservices?r=nametag">
                <div className="icon_box">
                  <img src={Instagram} alt="Instagram" />
                </div>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/vangold-services">
                <div className="icon_box">
                  <img src={Linkedln} alt="Linkedln" />
                </div>
              </a>
              <a target="_blank" href="https://youtube.com/channel/UCIQ2CKeTBmfCYwS0_K_g-lw">
                <div className="icon_box">
                  <img src={Youtube} alt="Youtube" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomfooter">
        <div className="container">
          <div className="bottomfooter__inner">
            <div className="left_bottom_f">
              <p>© 2020 Vangold Technologies. All rights reserved</p>
            </div>
            <div className="right_bottom_f">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
