import "./footer.css";
import { Link } from "react-router-dom";
import icon1 from "../images/svgicons/Path-4.svg";
import icon2 from "../images/svgicons/Path-2.svg";
import icon3 from "../images/svgicons/Path-6.svg";
import icon4 from "../images/svgicons/Path-5.svg";
import icon5 from "../images/svgicons/Path.svg";
import icon6 from "../images/svgicons/Path-3.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <div className="footer__links">
            <h2>Product</h2>
            <ul>
              <li>
                <Link to="">Overview</Link>
              </li>
              <li>
                <Link to="">Features</Link> &nbsp;<Link style={{color: "#2EC5CE"}} to=""><i>New</i></Link>
              </li>
              <li>
                <Link to="">Tutorials</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">Releases</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Press</Link>
              </li>
              <li>
                <Link to="">Careers</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h2>Support</h2>
            <ul>
              <li>
                <Link to="">Help Center</Link>
              </li>
              <li>
                <Link to="">Terms of service</Link>
              </li>
              <li>
                <Link to="">Legal</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
              <li>
                <Link to="">Status</Link>
              </li>
            </ul>
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
              <Link href="">
                <div className="icon_box">
                  <img src={icon1} alt="icon1" />
                </div>
              </Link>
              <Link href="">
                <div className="icon_box">
                  <img src={icon2} alt="icon2" />
                </div>
              </Link>
              <Link href="">
                <div className="icon_box">
                  <img src={icon3} alt="icon3" />
                </div>
              </Link>
              <Link href="">
                <div className="icon_box">
                  <img src={icon4} alt="icon4" />
                </div>
              </Link>
              <Link href="">
                <div className="icon_box">
                  <img src={icon5} alt="icon5" />
                </div>
              </Link>
              <Link href="">
                <div className="icon_box">
                  <img src={icon6} alt="icon6" />
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="terms-policy">
            <div className="terms-policy-links">
              <ul>
                <li>
                  <Link to="">Terms of Service</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
