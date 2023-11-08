import React from 'react'
import { Col } from "react-bootstrap";
import { Item, Button } from "semantic-ui-react";

function ProductCard(item, selected, removeFromCompare, addToCompare) {
  return (
    <div>
    <Col xs={12} sm={6} md={6} lg={3}>
        <Item key={item.name}>
            <Item.Image size="small" src={item.img1} />
                <Item.Content verticalAlign="middle">
                    <Item.Header>{item.name}</Item.Header>
                    <Item.Description>{item.price}</Item.Description>
                    <Item.Extra>
                        {selected && selected.includes(item) ? (
                            <Button color="red" onClick={() => removeFromCompare(item)}>
                                Remove
                            </Button>
                            ) : (
                            <Button color="blue" onClick={() => addToCompare(item)}>
                                Compare
                            </Button>
                        )}
                    </Item.Extra>
            </Item.Content>
        </Item>
    </Col>
  </div>
  )
}

export default ProductCard