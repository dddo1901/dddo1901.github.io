import React from 'react'
import { Button } from "semantic-ui-react";
import './ProductsComparison.scss'
import Card from "react-bootstrap/Card";

function ProductCard({item, selected, removeFromCompare, addToCompare}) {
  return (
    <div>
        
            <Card className='card-newarrivals'>
                <Card.Img
                    className='img-product'
                    variant="top"
                    src={item.img1}
                    alt={item.name}
                    data-aos="zoom-in" 
                />
                <Card.Body> 
                    <Card.Title className="title-card-products">
                    {item.name}
                    </Card.Title>
                    <Card.Text className="price-card-products">
                    ${item.price}
                    </Card.Text>
                    <Card.Text className="star-card-products">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    </Card.Text>

                    {selected && selected.includes(item) ? (
                        <Button color="red" onClick={() => removeFromCompare(item)}>
                            Remove
                        </Button>
                        ) : (
                        <Button color="blue" onClick={() => addToCompare(item)}>
                            Compare
                        </Button>
                    )}
                </Card.Body>
            </Card>
        
  </div>
  )
}

export default ProductCard