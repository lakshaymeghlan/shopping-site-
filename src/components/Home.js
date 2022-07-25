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
          <p className="card-text fs-2">Check out all trends here!!!</p>
          </div>
        </div>
      </div>
    </div>
   
    <Products/>
    </>
    
  )
}

export default Home