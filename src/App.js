import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/Contact/Contact';
import Login from './components/Login/Login';
import CompareProducts from './components/CompareProducts/CompareProducts';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import "bootstrap";
import "react-bootstrap";
import './App.scss';
function App() {
  const [cart, setCart] = useState([]);
  const HandleCart = (Data) => {
    setCart([
      ...cart,
      {
        Data
      }
    ]);
  };
  
  return (
    <div>
      <div>
      <Header CartCount={cart.length} />
      </div>
      <MainMenu />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products Add={HandleCart}/> } />
        <Route path='/categories/:id' element={<Categories/>} Add={HandleCart} />
        <Route path='/brands/:id' element={<Brands/>} />
        <Route path='/detail/:id' element={<ProductDetailPage/>} />
        <Route path='/compare' element={<CompareProducts/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
