import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Programs from './Components/Programs';
import About from './Components/About';
import Campus from './Components/Campus';
import Testimonials from './Components/Testimonials';
import Title from './Components/Title';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Programs />  
      <About />    
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student Says' />
      <Testimonials />
      <Title subTitle='CONTACT US' title='Get in Touch' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
