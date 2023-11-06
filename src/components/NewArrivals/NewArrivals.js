import React from 'react';
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Products from "../Data.json";
import './NewArrivals.scss';
import { Link } from 'react-router-dom';
import './style.scss';

function NewArrivals(props) {

  const item = props;

  return (
    <Container fluid="md">
      <Row>
        <h1 className="newarrivals-title">New Arrivals</h1>
      </Row>

      <Row>
        {Products.filter((items) => {
          if (items.New === 1) {
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
                
                  <Button
                    className="add-products"
                  >
                    ADD TO CART
                  </Button>

                  <Button className="add-products" onClick={()=>props.handleAddComp(item.id)} >
                    COMPARE
                  </Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default NewArrivals