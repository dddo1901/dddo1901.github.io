import React, { useEffect } from 'react'
import './InformProduct.scss'
function InformProduct({inform,setInForm}) {
   const deleteinfrom = () => {
        let newitem = inform.slice(1)
        setInForm(newitem)
   }
    useEffect(()=>{
        const interval = setInterval(() =>{
            if(inform.length > 0){
                deleteinfrom();
            }
        },1500);
        return() =>{
            clearInterval(interval)
        }
    },[inform]) 

  return (
    <div className='containerInform'  >
        {inform.length > 0 &&  inform.map((item,index) => {
            return(
                <div className={item} key={index} onClick={() =>deleteinfrom(index)}>
                    <i className="fa-solid fa-circle-check icon-inform"></i>
                    <h4>{item === 'Comp'? "Product added to Comparison ":"Product added to Cart"}</h4>
                 </div>
            )
        })
        
        }
    </div>
  )
}

export default InformProduct
