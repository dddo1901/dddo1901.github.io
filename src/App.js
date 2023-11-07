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
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductData from "./components/Data.json"
import ProductsComparison from './components/ProductsComparison/ProductsComparison';
import InformProduct from './components/inform/InformProduct';




function App() {

  const [ comparison, setComparison] = useState('');
  const [ inform, setInForm] = useState([])

  const handleDelComparison = (id)=>{
    const newcomparison = comparison.filter((temp) => temp.id !== id);
    setComparison((comparison)=>newcomparison);
  }
  const handleAddComparison = (id) =>{
    if(comparison.length <= 4){
      let newComp = ProductData.filter((item) => item.id===id)
    setComparison((comparison)=> [...comparison, newComp[0]]) 
    } else{
      return alert("You should only choose a maximum of 5 products.")
    }
    setInForm((inform) => [...inform,'Comp'])
    
  }

  return (
    <div>
      <Header />
      <MainMenu />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories/:id' element={<Categories handleAddComp={handleAddComparison}/>}  />
        <Route path='/brands/:id' element={<Brands handleAddComp={handleAddComparison} />} />
        <Route path='/detail/:id' element={<ProductDetailPage/>}  />
        <Route path='/compare' element={<ProductsComparison handleDelComp={handleDelComparison} dataComparison={comparison}/>}/>
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about_us' element={<AboutUs/>} />
      </Routes>
      <InformProduct inform={inform} setInForm={setInForm}/>
      <Footer />
    </div>
  );
}

export default App;
