import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slideshow from './components/Slideshow/Slideshow';


function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
