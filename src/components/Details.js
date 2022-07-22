import Data from '../db.json'
import React from 'react'
// import Navbar from './Navbar'

function Details() {

    return (
        <>
        {/* <Navbar/> */}
            <div className='container'>

                <h1 className='second_head'>PRODUCTS</h1>
                <div className='app col-10 mx-auto col-md-6 col-lg-3 my-3'>
                    <div className='products '>
                        {Data.products.map(products => {
                            return (
                                <>
                                    <h4 className='anchor_cls'>{products.name}</h4>
                                    <p>{products.desc}</p>
                                     <img src={products.large} alt={products.name} />

                                </>
                            )
                        })}

                    </div>
                </div>

            </div>

        </>
    )
}

export default Details

