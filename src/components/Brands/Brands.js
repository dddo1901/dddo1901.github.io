import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Products from "../Data.json";
import { Link } from 'react-router-dom';
import './style.scss';

function Brands(props) {
  
  const item = props;
  const { id } = useParams();
  let items = Products.filter((items) => items.Brand.id == id);
  console.log(items);
  console.log(item);
  return (
    <div>
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
                
                  <Button className="add-products">
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
    </div>
  )
}

export default Brands