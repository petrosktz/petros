import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
