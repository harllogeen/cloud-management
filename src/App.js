
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import AllInOne from './Components/AllInOne'
import "./index.css"
import Support from './Components/Support';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
