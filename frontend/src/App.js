import './dist/Styles.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './page/Home';
import Services from './page/Services';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services/>} />

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
  