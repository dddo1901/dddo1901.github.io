import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brands from '../Brands/Brands.json';
import Categories from '../Categories/Categories.json';
import './MainMenu.scss';


function MainMenu() {
  return (
    <div className="mainmenu-content">
      <Navbar  expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/" className='mainmenu-item'>HOMEPAGE</Nav.Link>
              <Nav.Link href="/products" className='mainmenu-item'>PRODUCTS</Nav.Link>

              <NavDropdown
                    title="CATEGORIES"
                    id="basic-nav-dropdown"
                    className="mainmenu-item"
                  >
                    {Categories.map((item, index) => (
                      <NavDropdown.Item href={`/Categories/${item.id}`} key={index}>
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

              <NavDropdown
                    title="BRANDS"
                    id="navbarScrollingDropdown"
                    className="mainmenu-item"
                  >
                    {Brands.map((items, index) => (
                      <NavDropdown.Item
                        href={`/brands/${items.id}`}
                        key={index}
                        bsPrefix="dropdown-item"
                      >
                        {items.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
              <Nav.Link href="/compare" className='mainmenu-item'>COMPARE</Nav.Link>
              <Nav.Link href="/contact" className='mainmenu-item'>CONTACT US</Nav.Link>
              <Nav.Link href="/about_us" className='mainmenu-item'>ABOUT US</Nav.Link>           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainMenu