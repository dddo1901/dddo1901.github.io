import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetaiPage.scss'
import { useParams } from 'react-router-dom'
import Products from '../Data.json'
import SliderProducts from '../SliderProducts/SliderProducts'

function ProductDetailPage({handleCarts}) {
  const data = Products;
  const keypara = useParams();
  const id = keypara.id;
  
  let item = data.filter((item) => item.id === parseInt(keypara.id))
  let imgPreview = item[0].img;
  let name = item[0].name;
  let price = item[0].price;
  let brand = item[0].Brand
  const [numberProduct, setNumberProduct] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  let handleAdd = () =>{
    setNumberProduct(numberProduct + 1)
  }
  let handleSub = () =>{
    if(numberProduct === 0){
      setNumberProduct(0)
    }else {
      setNumberProduct(numberProduct - 1)
    }
  }
  let handleAddCart = () =>{

    if(numberProduct === 0){
      return(
        alert("Please add quantity of Products")
      ) 
    }else (handleCarts({id,name,brand,numberProduct,imgPreview,price}))

  }
  return (
    <div className='product-detail-page'>
      <div className="detail-container">
        <div className='slideshow'>
          <div className='slideshow-slider'>
            <SliderProducts imagesPreview={item[0].img}/>
          </div>
        </div>
        <div className='slideshowthumbnail'>
          {item[0].img.map((temp,ind) =>{
            return(
              <div className='slideshowthumbnail-items' style={{backgroundImage: `url("${temp.path}")`}} key={ind}>
              </div>
            )
          })}
          
        </div>
        <div className='content-bar'>
          <h2>{item[0].name}</h2>
          <h4>Design by {item[0].Brand.name}</h4>
          <h5>Type: {item[0].Category.name}</h5>        
          <h2>Price: {item[0].price} $</h2>
        <div className='content-bar-numbers'>
          <button onClick={()=> handleSub()}><h4>-</h4></button>
          <h4>{numberProduct}</h4>
          <button onClick={()=> handleAdd()}><h4>+</h4></button>
        </div>
        <div className='content-bar-Add'>
          <button onClick={()=> handleAddCart()}>
          <i className="fa-solid fa-cart-plus iconAdd"></i>
          </button>
        </div>
        <Link to={item[0].File} target="_blank" download>Download Information Product &emsp;
            <i className="fa-solid fa-download"></i>
        </Link>
        </div>
        </div>
        <div className='about-product'>
          <h2>About Product</h2>
          <h5>{item[0].Description}</h5>
        </div>
    </div>
  )
}

export default ProductDetailPage
