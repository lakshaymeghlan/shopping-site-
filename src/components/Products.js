import Data from '../db.json'
import React from 'react'

function Products() {
  
  return (
    <>
    <div className='container'>
     
    <h1 className='second_head'>PRODUCTS</h1>
    <div className='app col-10 mx-auto col-md-6 col-lg-3 my-3'>
      <div className='products '>
        {Data.products.map(products =>{
          return(
            <>
           <a href='/'> <h4 className='anchor_cls'>{products.name}</h4></a>
            {/* <p>{products.desc}</p> */}
            <a href='/'> <img src={products.small} alt={products.name}/></a>
            
            </>
          )
        })}
        
      </div>
    </div>

      </div>
      
    </>
  )
}

export default Products

