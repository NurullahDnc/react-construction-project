import './scss/Styles.scss';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './page/Home';
import ServicesPage from './page/ServicesPage';
import Project from './page/Project';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About';
import Career from './page/Career';
import Contact from './page/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServicesPage/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/career" element={<Career/>} />
          <Route path='/contact' element={<Contact />} />



          {/*sayfa bulunamadıgı zaman varsayılan olarak calısacak */}
          <Route path="*" element={<div>sayfa bulunmadı</div>} />
          
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


/*product'ta ,onclick yazdık tıklandıgında, id url atıyor dinamik olarak, id gore yonlendirme yapıyor? */
  