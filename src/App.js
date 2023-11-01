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
import CompareProducts from './components/CompareProducts/CompareProducts';



function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories/:id' element={<Categories/>} />
        <Route path='/brands/:id' element={<Brands/>} />
        <Route path='/compare' element={<CompareProducts/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
