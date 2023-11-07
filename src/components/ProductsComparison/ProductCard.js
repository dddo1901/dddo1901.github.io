import React from 'react'
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


function ProductCard(items, selected, removeFromCompare, addToCompare) {
  return (
    <div>
    <Col xs={12} sm={6} md={6} lg={3}>
        <Card className='card-newarrivals'>
            <Card.Img
                className='img-product'
                variant="top"
                src={items.img1}
                alt={items.name}
            />
        <Card.Body> 
            <Card.Title className="title-card-products">
                {items.name}
            </Card.Title>
        
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
            {selected && selected.includes(items) ? (
                <Button color="red" onClick={() => removeFromCompare(items)}>
                    Remove
                </Button>
                ) : (
                <Button color="blue" onClick={() => addToCompare(items)}>
                    Compare
                </Button>
                )}
        </Card.Body>
        </Card>
    </Col>
  </div>
  )
}

export default ProductCard