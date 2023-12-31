import React from "react";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Products from "../Data.json";
import "./NewArrivals.scss";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewArrivals({ Add }) {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);
  const notify = () =>
    toast.success("Product successfully added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const { id } = useParams();
  let item = Products.filter((x) => x.ID == id);
  item=item[0];
  console.log(item);
  return (
    <Container fluid="md">
      <Row className="text-center mt-5 mb-3 " data-aos="fade-right">
        <h1 className="newarrivals-title">
        <img className="new-logo"
          src="https://media3.giphy.com/media/YXsTvToTUMwzDEHTR0/source.gif"
          alt="new"
        />
        </h1>
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
            <Card className="card-newarrivals">
              <Link to={`/detail/${items.id}`}>
                <Card.Img
                  className="img-product"
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
                <Button
                  className="add-products"
                  onClick={() => notify(Add(items, 1))}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Row>
    </Container>
  );
}

export default NewArrivals;
