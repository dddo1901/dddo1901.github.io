import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductDetaiPage.scss";
import { useParams } from "react-router-dom";
import Products from "../Data.json";
import SliderProducts from "../SliderProducts/SliderProducts";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

function ProductDetailPage({ Add }) {
  const data = Products;
  const keypara = useParams();
  const id = keypara.id;

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

  let item = data.filter((item) => item.id === parseInt(keypara.id));
  let imgPreview = item[0].img;
  let name = item[0].name;
  let price = item[0].price;
  let brand = item[0].Brand;
  let description = item[0].Description
  
  const [numberProduct, setNumberProduct] = useState(1);
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  let handleAdd = () => {
    setNumberProduct(numberProduct + 1);
  };
  let handleSub = () => {
    if (numberProduct === 0) {
      setNumberProduct(0);
    } else {
      setNumberProduct(numberProduct - 1);
    }
  };
  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <div className="slideshow">
          <div className="slideshow-slider">
            <SliderProducts imagesPreview={imgPreview} />
          </div>
        </div>
        <div className="slideshowthumbnail">
          {imgPreview.map((temp, ind) => {
            return (
              <div
                className="slideshowthumbnail-items"
                style={{ backgroundImage: `url("${temp.path}")` }}
                key={ind}
              ></div>
            );
          })}
        </div>
        <div className="content-bar">
          <h2>{name}</h2>
          <h4>Design by {brand.name}</h4>
          <h5>Type: {name.Category}</h5>
          <h2>Price: {price} $</h2>
          <div className="content-bar-numbers">
            <button onClick={() => handleSub()}>
              <h4>-</h4>
            </button>
            <h4>{numberProduct}</h4>
            <button onClick={() => handleAdd()}>
              <h4>+</h4>
            </button>
          </div>
          <div className="content-bar-Add">
            <Button
              className="buttonAdd text-center fa-solid fa-cart-plus"
              onClick={() => notify(Add(item[0], 1))}
            >
            </Button>
          </div>
          <Link to={item[0].File} target="_blank" download>
            Download Information Product &emsp;
            <i className="fa-solid fa-download"></i>
          </Link>
        </div>
      </div>
      <div className="about-product">
        <h2>About Product</h2>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default ProductDetailPage;
