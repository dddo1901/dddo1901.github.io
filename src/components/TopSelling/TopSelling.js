import React from 'react';
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Products from "../Data.json";
import './TopSelling.scss';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function TopSelling() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  return (
    <Container fluid="md" data-aos="fade-up">
      <Row className="text-center mt-5 mb-3 " data-aos="fade-right">
        <h1 className="topselling-title">Top Selling</h1>
      </Row>
      <Row>
        {Products.filter((items) => {
          if (items.Top === 1) {
            return items;
          } else {
            return null;
          }
        }).map((items, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index}>
            <Card className='card-newarrivals'>
              <Link to={`/detail/${items.id}`}>
                <Card.Img
                    className='img-product'
                    variant="top"
                    src={items.img1}
                    alt={items.name}
                    data-aos="zoom-in"
                />
              </Link>
              <Card.Body> 
                <Link to={`/detail/${items.id}`}>
                  <Card.Title className="title-card-products">
                    {items.name}
                  </Card.Title>
                </Link>
              
                  <Card.Text className="price-card-products">
                    ${items.price}
                  </Card.Text>
                  <Card.Text className="star-card-products">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </Card.Text>
                <Link to={`/detail/${items.id}`}>
                  <Button className="add-products">
                    ADD TO CART
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TopSelling