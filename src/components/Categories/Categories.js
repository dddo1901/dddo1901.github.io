import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Products from "../Data.json";
import { Link } from "react-router-dom";
import MainPagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Category.scss";
import { ToastContainer, toast } from "react-toastify";

function Categories({Add}) {
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
  let items = Products.filter((item) => item.Category.id == id);
  let Title = items.slice(0, 1);
  console.log(items);

  const ProPerPage = 8;
  const [Page, setPage] = useState(0);
  function HandlePage({ selected: select }) {
    setPage(select);
  }
  const cut = Page * ProPerPage;
  const PageCount = Math.ceil(items.length / ProPerPage);
  const PageData = items.slice(cut, cut + ProPerPage);
  return (
    <Container data-aos="fade-left">
      <Row>
        {Title.map((item, index) => (
          <div className="categories-title" key={index}>
            {item.Category.name}
          </div>
        ))}
      </Row>
      <Row>
        {PageData.map((items, index) => (
          <Col xs={12} sm={6} md={6} lg={3} key={index}>
            <Card className="card-newarrivals">
              <Link to={`/detail/${items.id}`}>
                <Card.Img
                  className="img-product"
                  data-aos="zoom-in"
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
                  onClick={() => {
                    notify(Add(items, 1));
                  }}
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
      <Row>
        <MainPagination PageCount={PageCount} HandlePage={HandlePage} />
      </Row>
    </Container>
  );
}

export default Categories;
