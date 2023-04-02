import logo from './assets/logo.svg';
import './assets/App.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Slides from './components/Slides';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Preloader/>
     <Navbar/>
     <Slides/>
     <Footer/>
    </div>
  );
}

export default App;
