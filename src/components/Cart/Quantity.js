import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";

function Quantity({
  cart,
  MainCart,
  HandleQuantity,
  quantity,
  setQuantity,
  id,
}) {
  //const {HandleQuantity,setQuantity,quantity} = useContext(CartContext);
  //onClick={() => {MainCart ? HandleQuantity("Minus",Id) : setSL(SL-1)} }
  const SLId = cart.findIndex((x) => x.Data.ID === id);

  return (
    <div className="text-center">
      <Button
        variant="dark"
        className="me-2"
        onClick={() => {
          MainCart ? HandleQuantity("Minus", id) : setQuantity(quantity - 1);
        }}
      >
        -
      </Button>
      {cart[SLId].quantity}
      <Button
        variant="dark"
        className="ms-2"
        onClick={() => {
          MainCart ? HandleQuantity("Plus", id) : setQuantity(quantity + 1);
        }}
      >
        +
      </Button>
    </div>
  );
}

export default Quantity;
