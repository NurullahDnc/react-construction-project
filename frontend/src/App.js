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
import Detail from './page/Detail';
import {  useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import {getProject} from './redux/ProjectSlice';

//toast 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './components/popup/Popup';
import Admin from './admin/Admin';
import Login from './admin/auth/Login';



function App() {

const dispacth = useDispatch();


console.log(useSelector((state)=> state.project));

const {project, loading, error} = useSelector((state)=> state.project)

useEffect(()=>{
  dispacth(getProject())
},[dispacth]) 

// console.log(error);

if (loading) {
  return <div className='loading'>Yükleniyor...</div>;
}

  return (
    <div className="App">
        <ToastContainer
          position="top-center"
          reverseOrder={false}
        />
        
        {/* <Popup /> */}
 

      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/admin/*' element={<Admin />} />
            <Route path='/admin/login' element={<Login />} />


            
            <Route path="*" element={<div>sayfa bulunmadı</div>} />
          </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;


/*product'ta ,onclick yazdık tıklandıgında, id url atıyor dinamik olarak, id gore yonlendirme yapıyor? */
  