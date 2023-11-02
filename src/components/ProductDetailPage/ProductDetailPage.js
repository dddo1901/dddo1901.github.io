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
  let imgPreview = item[0].imagesPreview[0];
  let name = item[0].name;
  let price = item[0].price;
  const [colorstate, setColorstate] = useState('');
  const [numberProduct, setNumberProduct] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  let handleColor = (color) =>{
    setColorstate(color);
  }
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

    if(colorstate.length === 0 || numberProduct === 0){
      return(
        alert("Please add quantity or color of Products")
      ) 
    }else (handleCarts({id,name,colorstate,numberProduct,imgPreview,price}))

  }
  return (
    <div className='product-detail-page'>
      <div className="detail-container">
        <div className='slideshow'>
          <div className='slideshow-slider'>
            <SliderProducts imagesPreview={item[0].imagesPreview}/>
          </div>
        </div>
        <div className='slideshowthumbnail'>
          {item[0].imagesPreview.map((temp,ind) =>{
            return(
              <div className='slideshowthumbnail-items' style={{backgroundImage: `url("${temp.path}")`}} key={ind}>
              </div>
            )
          })}
          
        </div>
        <div className='content-bar'>
          <h2>{item[0].name}</h2>
          <h4>Design by {item[0].brand.name}</h4>
          <h5>Model: {item[0].model}</h5>
          <h5>Choose Color:&nbsp;{`${colorstate}`.toUpperCase()}</h5>
          <div className='content-bar-color'>
           
            {item[0].detail.color.map((items,index)=>{
                let colorbase = "content-bar-color-item-";
                let color = colorbase.concat(`${items}`);
              return(
                <div style={{border: items === colorstate && "2px solid blue"}} key={index} >
                  <div className={color}  style={{border:"red"}} >
                    <input type='radio' name="color-check" id='color-check' onClick={()=>handleColor(items)}></input>
                  </div>
                </div>
              )
            })}
          </div>
          <h5>Material: {item[0].detail.material}</h5>
          <h5>Dimension: Height: {item[0].detail.height} cm x Width: {item[0].detail.width} cm x Depth: {item[0].detail.depth} cm</h5>
          
          <div className='content-bar-cart'>
            <h2>Price: {item[0].price} $</h2>
              <div className='content-bar-cart-numbers'>
                <button onClick={()=> handleSub()}><h4>-</h4></button>
                <h4>{numberProduct}</h4>
                <button onClick={()=> handleAdd()}><h4>+</h4></button>
              </div>
              <div className='content-bar-cart-Add'>
                <button onClick={()=> handleAddCart()}>
                  <i className="fa-solid fa-cart-plus iconAdd"></i>
                </button>
              </div>

          </div>
          <Link to={item[0].files} target="_blank" download>Download Information Product &emsp;
          <i className="fa-solid fa-download"></i>
          </Link>
        </div>
        <div className='about-product'>
          <h2>About Product</h2>
          <h5>{item[0].desc1}</h5>
          <img src={item[0].images[0].path} alt="" />
          <h5>{item[0].desc2}</h5>
          <img src={item[0].images[1].path} alt="" />

        </div>
        
        <div className="dimensions">
          <h2>Dimension</h2>
          {item[0].imagesdms ==='null' ?' ': <img src={item[0].imagesdms} alt="dim" />}
          
        </div>
        <div className="reviews"></div>
      </div>
    </div>
  )
}

export default ProductDetailPage
