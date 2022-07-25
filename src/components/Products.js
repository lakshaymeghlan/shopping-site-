import Data from '../db.json'
import React from 'react'
import { Link } from "react-router-dom";

function Products() {

  return (
    <>
      <div className='container'>

        <h1 className='second_head'>PRODUCTS</h1>
        <div className='app col-10 mx-auto col-md-6 col-lg-3 my-3'>
          <div className='products '>
            {Data.products.map(products => {
              return (
                <>
                   <Link to="/product_details"> <h4 className='anchor_cls'>{products.name}</h4></Link>
                  {/* <p>{products.desc}</p> */}
                  <img src={products.small} alt={products.name} />

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

