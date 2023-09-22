
import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Navbar from './Navbar';
import { CartProvider } from 'react-use-cart';




function App(){
  
  
  return (
    <div>
           <Navbar/>
            <CartProvider>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
          </CartProvider>
       
    </div>
  );
}

export default App;
