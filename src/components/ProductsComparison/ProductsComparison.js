import React from 'react'
import './ProductsComparison.scss'
import imgbanner1 from '../assets/images/Comparison/banner-comparison.png'

function ProductsComparison(props) {
    let temp = props.dataComparison;
    let handleDelitem =(id)=>{
        props.handleDelComp(id)
    }
    if(temp ===''){
        return( 
            <div className='productscomparison-noProduct' >
                <img src={imgbanner1} alt="bannercomp" />
                <h3>No products. Please add products...</h3>
                <p>*Please return to the product page and click on the Compare button to select the product to compare. You should only choose a maximum of 5 products.</p>
            </div>
        )
    }else{
        return (
        <div className='productscomparison'>
            <div className='productscomparison-container'>
                <div className='productscomparison-container-title'>
                    <h1>COMPARISON <br/> PRODUCTS</h1>
                    <img src={imgbanner1} alt="bannercomp" />
                </div>
                <p>You can compare products to make the most suitable choice.</p>
                <p>*You can only compare a maximum of <span style={{color:'red',fontWeight:'600'}}>5 products</span>. To add new products, please delete existing products in the product comparison page.</p>
                <table className='table' >
                    <thead> 
                        <tr>
                            <th>Attribute</th>
                            {temp.map((item,index) =>{
                                return(
                                    <th key={item.id}>{item.name}</th>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Brand</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.brand.name}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Categories</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.categories.name}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Model</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.model}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Price:</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index} className='price'>{item.price}$</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Status</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.status}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Preview</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>
                                    <img src= {item.imagesPreview[0].path} alt="" />
                                   </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Dimension</td>
                            {temp.map((item,index) =>{
                        return(
                            <td key={index}>Height: {item.detail.height} Width:{item.detail.width} Depth:{item.detail.depth}</td>
                        )
                            })}
                        </tr>
                        <tr>
                            <td className='table-remove' ></td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index} className='table-remove' >
                                        <button type="button" className='table-remove-button' 
                                        onClick={() =>handleDelitem(item.id)} >Remove</button>
                                    </td>
                                )
                            })}
                        </tr>
                    </thead>   
                </table>
            </div>
        </div>
      )}
}

export default ProductsComparison
