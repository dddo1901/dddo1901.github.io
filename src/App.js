import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import { Route, Router } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';



function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Slideshow/>
      <Router>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/brands' element={<Brands/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about_us' element={<AboutUs/>} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
