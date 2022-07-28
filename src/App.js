import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";
import SignUp from "./components/login/Signup";
import Home from "./components/Home";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Details from "./components/Details";
import UserDetails from './components/login/UserDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products_details/:product_id" element={<Details />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
