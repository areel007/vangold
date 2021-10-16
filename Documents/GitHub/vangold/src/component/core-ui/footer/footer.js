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
                  field you requiremto help you scale your business and increase revenue for you. </p>
            </div>
          </div>
          <div className="footer-links-container">
            <div className="footer__links">
              <h2>RESOURCE</h2>
              <div className="ul">
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/over">Contact Us</Link>
                </li>
                <li>
                  <Link to="/over">News</Link>
                </li>
              </div>
            </div>
            <div className="footer__links">
              <h2>SUPPORT</h2>
              <div className="ul">
                <li>
                  <Link to="/over">FAQ’s</Link>
                </li>
                <li>
                  <Link to="/over">Proof of Payment</Link>
                </li>
                <li>
                  <Link to="/over">Feedback</Link>
                </li>
                <li>
                  <Link to="/over">Home</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="footer__contacts">
            <h2>CONTACTS</h2>
            <p>Address: Park Avenue, 5th Street, Manhattan
              NYC. <br/>Phones: 987-7654-3210   987-7654-3210<br/>
              Email: Info@website.com</p>
              <div className="footer__contacts-icons">
              <Link to="/over">
                <div className="icon_box">
                  <img src={Twitter} alt="Twitter" />
                </div>
              </Link>
              <Link to="/over">
                <div className="icon_box">
                  <img src={Instagram} alt="Instagram" />
                </div>
              </Link>
              <Link to="/over">
                <div className="icon_box">
                  <img src={Linkedln} alt="Linkedln" />
                </div>
              </Link>
              <Link to="/over">
                <div className="icon_box">
                  <img src={Youtube} alt="Youtube" />
                </div>
              </Link>
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
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
