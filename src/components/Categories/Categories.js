import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Products from "../Data.json";
import { Link } from 'react-router-dom';


function Categories() {
  const {id} = useParams();
  let items = Products.filter((items) => items.Category.id == id);
  console.log(items);

  return (
    <Container>
      <Row>
        {items.map((items, index) => (
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

export default Categories