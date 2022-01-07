import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './Pages/Product';
import Register from './Pages/Register';
import ProductList from './Pages/ProductList';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <p> <Cart /> </p>
    </div>
  );
}

export default App;
