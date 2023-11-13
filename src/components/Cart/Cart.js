import { Col, Container, Row } from "react-bootstrap";
import data from "../Data.json";
import "./Cart.scss";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Quantity from "./Quantity";
import CartContext from "../Context/CartContext";


import Modal from "react-bootstrap/Modal";

function Cart() {
  const { cart, HandleQuantity, ProQuantity, setProQuantity } = useContext(
    CartContext
  );
  const [Data, setData] = useState(cart);
  const [CartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    Data.forEach((items) => {
      total += items.Data.price * items.quantity;
    });
    setCartTotal(total.toFixed(2));
  }, [Data]);

  const HandleDelete = (id) => {
    const NewCart = Data.filter((items) => items.Data.ID !== id);
    setData(NewCart);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="mt-5">
        <table id="customers">
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Money</th>
          </tr>
          {Data.map((item, index) => (
            <tr>
              <td key={index}>{item.Data.name}</td>
              <td key={index} className="text-center">
                ${item.Data.price}
              </td>
              <td key={index} className="text-center">
                <Quantity
                  cart={cart}
                  quantity={ProQuantity}
                  setQuantity={setProQuantity}
                  MainCart={true}
                  HandleQuantity={HandleQuantity}
                  Id={item.Data.ID}
                />
              </td>
              <td key={index} className="text-center">
                ${item.Data.price * item.quantity}
              </td>
              <div key={index}>
                <Button
                  variant="danger"
                  className="ms-2 mt-2"
                  onClick={() => {
                    HandleDelete(item.Data.ID);
                  }}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </Button>
              </div>
            </tr>
          ))}
        </table>
        <div className="cart-total-pay">
          <p className="cart-total">Total (USD): ${CartTotal}</p>
          <Button onClick={handleShow} className="cart-pay">
            Pay Now
          </Button>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} centered className="modal-cart">
        <Modal.Body>
          <div>
            <h4 className="text-center content-modal">
              Thank You For Buying Our Product
              <span className="icon-sucess">
                <i class="fa-regular fa-circle-check"></i>
              </span>
            </h4>
          </div>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
