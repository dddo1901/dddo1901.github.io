import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sideshow from './components/Sideshow/Slideshow';
import NewArrivals from './components/NewArrivals/NewArrivals';
import TopSelling from './components/TopSelling/TopSelling';


function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Sideshow/>
      <NewArrivals />
      <TopSelling />
      <Footer />
    </div>
  );
}

export default App;
