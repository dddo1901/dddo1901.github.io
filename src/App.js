import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';
import NewArrivals from './components/NewArrivals/NewArrivals';
import TopSelling from './components/TopSelling/TopSelling';


function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Slideshow />
      <NewArrivals />
      <TopSelling />
      <Footer />
    </div>
  );
}

export default App;
