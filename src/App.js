
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import Services from "./components/Services";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './styles/App.scss';
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'




function App() {
  
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
         
        </Routes>
        <Footer />
      </Router>

      
      

   



    </div>
  );
}

export default App;