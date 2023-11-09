import React from 'react'
import { Item, Button } from "semantic-ui-react";

function ProductCard({item, selected, removeFromCompare, addToCompare}) {
  return (
    <div>
    
        <Item key={item.id}>
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
    
  </div>
  )
}

export default ProductCard