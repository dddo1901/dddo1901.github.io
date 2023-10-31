import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brand from '../Brands/Brand.json';
import Category from '../Categories/Category.json';
import Men from '../Men/Men.json';
import Women from '../Women/Women.json';
import './Mainmenu.scss';


function MainMenu() {
  return (
    <div className="mainmenu-content">
      <Navbar  expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home" className='mainmenu-item'>HOMEPAGE</Nav.Link>
              <Nav.Link href="#link" className='mainmenu-item'>PRODUCTS</Nav.Link>

              <NavDropdown
                    title="CATEGORIES"
                    id="basic-nav-dropdown"
                    className="mainmenu-item"
                  >
                    {Category.map((item, index) => (
                      <NavDropdown.Item href={`/Category/${item.Id}`} key={index}>
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

              <NavDropdown
                    title="BRANDS"
                    id="navbarScrollingDropdown"
                    className="mainmenu-item"
                  >
                    {Brand.map((items, index) => (
                      <NavDropdown.Item
                        href={`/brand/${items.id}`}
                        key={index}
                        bsPrefix="dropdown-item"
                      >
                        {items.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <NavDropdown
                    title="MEN"
                    id="navbarScrollingDropdown"
                    className="mainmenu-item"
                  >
                    {Men.map((items, index) => (
                      <NavDropdown.Item
                        href={`/men/${items.id}`}
                        key={index}
                        bsPrefix="dropdown-item"
                      >
                        {items.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <NavDropdown
                    title="WOMEN"
                    id="navbarScrollingDropdown"
                    className="mainmenu-item"
                  >
                    {Women.map((items, index) => (
                      <NavDropdown.Item
                        href={`/women/${items.id}`}
                        key={index}
                        bsPrefix="dropdown-item"
                      >
                        {items.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

              <Nav.Link href="#link" className='mainmenu-item'>HELP CENTER</Nav.Link>
              <Nav.Link href="#link" className='mainmenu-item'>CONTACT US</Nav.Link>
              <Nav.Link href="#link" className='mainmenu-item'>ABOUT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainMenu