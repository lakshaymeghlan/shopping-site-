import './App.css';
import Navbar from './components/Navbar'
import Login from './components/login/Login';
import Home from './components/Home';
import Products from './components/Products';
import {
  Route,
  Switch,
  Redirect,
  link,
} from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
          <Home />
      <Switch>
        <Route path="/Products" element={<Products />} />
        <Products />y
      </Switch>
      <Footer />


    </div>
  );
}

export default App;
