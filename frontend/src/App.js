// App.js
import './scss/Styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProject } from './redux/ProjectSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
import Login from './admin/auth/Login';
import AdminRoutes from './admin/routes/AdminRoutes';

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { project } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/iletisim')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data, "iletisim");

  return (
    <div className="App">
      <ToastContainer position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout />
            }
          />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            }
          />

          <Route path="/admin" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
