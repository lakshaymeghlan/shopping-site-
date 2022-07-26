import React from 'react'
import photo from '../assest/1.jpg'
import Products from './Products'


const Home = () => {
  return (
    <>
    <div className='hero'>
      <div className="card bg-dark text-black border-0">
        <img className="card-img" src={photo} alt="Card image" height="550px" />
        <div className="card-img-overlay">
          <div className='container'>
          <h1 className="card-title ">SHOP</h1>
          <h6 className="card-title ">And</h6>
          <h1 className="card-text fs-2">Walk like a king.</h1>
          </div>
        </div>
      </div>
    </div>
   
    <Products/>
    </>
    
  )
}

export default Home