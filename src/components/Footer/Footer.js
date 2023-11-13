import "./Footer.scss";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import Logo from "./img-Footer/Gracious Garments-logos_transparent.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <div className="footer">
      <ScrollToTop smooth top="50" className="scrolling-to-top" />
      <div className="footer-top" data-aos="fade-down">
        <div className="footer-logo-phone">
          <img className="footer-logo" src={Logo} alt="logo" />
          <div className="footer-phone">
            <i class="fa-solid fa-phone"></i> (+84) 000 000 0000
          </div>
        </div>
        <div className="footer-address-email">
          <div className="footer-email">
            <i class="fa-solid fa-envelope"></i> GraciousGrament@gmail.com{" "}
          </div>
          <div className="footer-address">
            <Link
              className="link-footer"
              to="https://maps.app.goo.gl/tubPufyUWp1E73jTA"
            >
              <p>
                <i class="fa-solid fa-location-dot"></i> 590 Cach Mang Thang
                Tam, Q3, TPHCM
              </p>
            </Link>
          </div>
        </div>

        <div className="footer-social">
          <div className="footer-follow">Follow us:</div>
          <div className="footer-social-icon">
            <Link
              className="link-footer"
              to="https://www.facebook.com/huyduu.19/"
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              className="link-footer"
              to="https://www.instagram.com/_uud.yuh19/"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              className="link-footer"
              to="https://www.youtube.com/@HuyDuu"
            >
              <i class="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>
        <div className="footer-about">
          <p className="footer-about-title">About</p>
          <div>
            <ul>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/about_us">
                  About us
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link" to="/categories">
                  All items
                </Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Privacy policy</Link>
              </li>
              <li className="footer-about-list">
                <Link className="footer-about-link">Term and Condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-customer">
          <p className="footer-customer-title">Customer</p>
          <div>
            <ul>
              <li className="footer-customer-list">
                <Link className="footer-customer-link" to="/login" >
                  My account
                </Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">
                  Wishlist
                </Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">
                  ShoppingCart
                </Link>
              </li>
              <li className="footer-customer-list">
                <Link className="footer-customer-link">
                  Customer Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-final">
        <div className="text-hr">
          <hr />
        </div>
        <p className="footer-final-text">
          &copy; GraciousGrament 2023. All Right Reservered.
        </p>
      </div>
    </div>
  );
}
export default Footer;