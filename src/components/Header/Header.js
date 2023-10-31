import React from 'react'
import Logo from './Gracious Garments-logos/Gracious Garments-logos_transparent.png';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img className='Logo' src={Logo} alt="logo" />
          </Col>
          <Col>
            <SearchBar />
          </Col>
          <Col>
            Cart
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header