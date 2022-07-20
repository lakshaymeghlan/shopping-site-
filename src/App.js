import './App.css';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn';
import Home from './components/Home';
import Products from './components/Products';
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <SignIn/>
      <Home/>
      {/* <BrowserRouter>
      <Routes>
      <Route path='/'> */}
        <Products/>
        {/* </Route>
      </Routes>
      </BrowserRouter> */}
      


      <Footer/>


     
    
    
      
    </div>
  );
}

export default App;
