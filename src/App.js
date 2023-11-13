import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
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
import 'semantic-ui-css/semantic.min.css';
import products from './components/Data.json';
import Cart from './components/Cart/Cart';
import CartContext from './components/Context/CartContext';

function App() {
  const location = useLocation();
  
  const [cart, setCart] = useState([]);
  const HandleCart = (Data,quantity ) => {
    setCart([
      ...cart,
      {
        Data,
        quantity 
      }
    ]);
  };
  
  const HandleQuantity = (icon, id) => {
    const updateCart = [...cart];
    const ProIndex = updateCart.findIndex((x) => x.Data.ID === id);
    if (icon === "Minus") {
      if (updateCart[ProIndex].quantity >= 1) {
        updateCart[ProIndex].quantity -= 1;
        setCart(updateCart);
      } else {
        updateCart[ProIndex].quantity = 0;
        setCart(updateCart);
      }
    } else if (icon === "Plus") {
      updateCart[ProIndex].quantity += 1;
      setCart(updateCart);
    }
  };
  return (
    <div>
      <div>
      <Header CartCount={cart.length} />
      </div>
      <MainMenu />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Homepage Add={HandleCart}/>} />
        <Route path='/brands/:id' element={<Brands Add={HandleCart}/>} />
        <Route path='/detail/:id' element={<ProductDetailPage Add={HandleCart}/>} />
        <Route path='/categories/:id' element={<Categories Add={HandleCart} /> }  />
        <Route path='/compare' element={<ProductsComparison products={products}/>}/>
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <CartContext.Provider
       value={{
        cart,
        HandleCart,
        HandleQuantity,
       }}
      >
      <Routes>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
