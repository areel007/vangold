import "./footer.css";
import { Link } from "react-router-dom";
import icon1 from "../../../assets/images/svgicons/Path-4.svg";
import icon2 from "../../../assets/images/svgicons/Path-2.svg";
import icon3 from "../../../assets/images/svgicons/Path-6.svg";
import icon4 from "../../../assets/images/svgicons/Path-5.svg";
import icon5 from "../../../assets/images/svgicons/Path.svg";
import icon6 from "../../../assets/images/svgicons/Path-3.svg";

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
                <Link to="/over">Overview</Link>
              </li>
              <li>
                <Link to="/over">Features</Link> &nbsp;<Link style={{color: "#2EC5CE"}} to=""><i>New</i></Link>
              </li>
              <li>
                <Link to="/over">Tutorials</Link>
              </li>
              <li>
                <Link to="/over">Pricing</Link>
              </li>
              <li>
                <Link to="/over">Releases</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h2>Company</h2>
            <ul>
              <li>
                <Link to="/over">About</Link>
              </li>
              <li>
                <Link to="/over">Press</Link>
              </li>
              <li>
                <Link to="/over">Careers</Link>
              </li>
              <li>
                <Link to="/over">Contact</Link>
              </li>
              <li>
                <Link to="/over">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h2>Support</h2>
            <ul>
              <li>
                <Link to="/over">Help Center</Link>
              </li>
              <li>
                <Link to="terms-and-conditions">Terms of service</Link>
              </li>
              <li>
                <Link to="/over">Legal</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/over">Status</Link>
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
              <Link to="">
              <Link to="/over">
                <div className="icon_box">
                  <img src={icon1} alt="icon1" />
                </div>
              </Link>
              <Link to="">
              <Link to="/over">
                <div className="icon_box">
                  <img src={icon2} alt="icon2" />
                </div>
              </Link>
              <Link to="">
              <Link to="/over">
                <div className="icon_box">
                  <img src={icon3} alt="icon3" />
                </div>
              </Link>
              <Link to="">

              <Link to="/over">
                <div className="icon_box">
                  <img src={icon4} alt="icon4" />
                </div>
              </Link>
              <Link to="">
              <Link to="/over">
                <div className="icon_box">
                  <img src={icon5} alt="icon5" />
                </div>
              </Link>
              <Link to="">
              <Link to="/over">
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
