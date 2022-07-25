import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Products from "./components/Products";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Routes,
//   Redirect,
//   link,
// } from "react-router-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    // <BrowserRouter>

    //   <Navbar />
    //   {/* <Home/>   */}

    //     <Routes>
    //       {/* <Route exact path ="/" component={Navbar}/> */}
    //       <Route path="/" component={Home} />

    //       {/* <Route exact path ="/" element={<Home/>}/> */}
    //       {/* <Route exact path="/Products" component={Products} /> */}
    //       {/* <Route path="/Products" element={<Products />} /> */}

    //       <Route path="/login" component={Login} />
    //     </Routes>

    //   <Products />
    //   <Footer />
    // </BrowserRouter>
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
