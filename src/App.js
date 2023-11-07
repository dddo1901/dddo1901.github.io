import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
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
import ProductData from "./components/Data.json"
import ProductsComparison from './components/ProductsComparison/ProductsComparison';
import InformProduct from './components/inform/InformProduct';
import "bootstrap";
import "react-bootstrap";
import './App.scss';
function App() {
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
        <Route path='/products' element={<Products/>} />
        <Route path='/categories/:id' element={<Categories handleAddComp={handleAddComparison}/>}  />
        <Route path='/brands/:id' element={<Brands handleAddComp={handleAddComparison} />} />
        <Route path='/detail/:id' element={<ProductDetailPage/>}  />
        <Route path='/compare' element={<ProductsComparison handleDelComp={handleDelComparison} dataComparison={comparison}/>}/>
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <InformProduct inform={inform} setInForm={setInForm}/>
      <Footer />
    </div>
  );
}

export default App;
