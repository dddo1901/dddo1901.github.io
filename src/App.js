import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/Contact/Contact';
import Login from './components/Login/Login';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsComparison from './components/ProductsComparison/ProductsComparison';
import "bootstrap";
import "react-bootstrap";
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Products from './components/Data.json'

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
        <Route path='/categories/:id' element={<Categories/>} Add={HandleCart} />
        <Route path='/brands/:id' element={<Brands/>} />
        <Route path='/detail/:id' element={<ProductDetailPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories/:id' element={<Categories />}  />
        <Route path='/brands/:id' element={<Brands  />} />
        <Route path='/detail/:id' element={<ProductDetailPage/>}  />
        <Route path='/compare' element={<ProductsComparison />}/>
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
