import { Container } from "react-bootstrap";
import "./Header.scss";
import Logo from "./Gracious Garments-logos/Gracious Garments-logos_transparent.png";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

function Header({ CartCount }) {
  return (
    <Container fluid="md">
      <div className="header">
        <div className="header-content">
          <Link to={'/'}>
            <div className="header-left-logo">
              <img className="header-img-logo" src={Logo} alt="logo" />
            </div>
          </Link>
          <div className="header-center-search">
            <SearchBar />
          </div>

          <div className="header-right-cart-login">
            <div className="header-login">
              <Link className="link-login" to={`/login`}>
                Log in
              </Link>
            </div>
            <div className="header-cart">
              <Link to={`/Cart`} className="link-cart">
                <i class="fa-solid fa-cart-shopping "></i>
              </Link>
            </div>
            <div className="SLCart">{CartCount}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
