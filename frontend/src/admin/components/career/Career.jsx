import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import AdminButton from '../general/AdminButton';
import { getCareer } from '../../../redux/CareerSlice';
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';  
import { db } from '../../../config/FirebaseConfig';  
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { useEffect } from 'react';

const Career = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state)=> state.auth);
  const { career } = useSelector((state) => state.career);

  if (!user) {
    navigate("/admin/");
  }

  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    text: "",
    url: "",
    buttonText: "",
  });

  useEffect(() => {
    dispatch(getCareer());
  }, [dispatch]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'text', headerName: 'Text', width: 210 },
    { field: 'url', headerName: 'URL', width: 210 },
    { field: 'buttonText', headerName: 'Button Text', width: 130 },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => {
        return (
          <button onClick={() => handleDelete(params)} className="mx-4 text-red-500 cursor-pointer ">
            <RiDeleteBin6Line size={25} />
          </button>
        )
      }
    },
    {
      field: "update",
      headerName: "Update",
      width: 100,
      renderCell: (params) => {
        return (
          <button onClick={() => navigate(`/admin/career/Update/${params.id}`)} className="mx-4 text-red-500 cursor-pointer ">
            <RxUpdate size={25} />
          </button>
        )
      }
    },
  ];

  const rows = career.map(item => ({
    id: item.id,
    title: item.title,
    text: item.text,
    url: item.url,
    buttonText: item.buttonText,
  }));

  const handleDelete = async (params) => {
    const id = params.id;
    try {
      await deleteDoc(doc(db, 'careerProduct', id)); 
      toast.success("Silme işlemi başarılı");
      setTimeout(() => {
        navigate(0);
      }, 750);
    } catch (error) {
      toast.error("Silme işleminde hata oluştu", error);
    }
  }

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  }

  const handleInputChange = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
      id: uuidv4()
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'careerProduct'), inputData);
      dispatch(getCareer());
      setIsOpen(false);
      setInputData({
        title: "",
        text: "",
        buttonText: "",
        url: ""
      });
      navigate(0);
      toast.success("Başarılı bir şekilde eklendi");
    } catch (error) {
      toast.error("Veri eklenirken bir hata oluştu", error);
    }
  }

  return (
    <div style={{ height: 600, width: '100%' }}>
      <h4 className='pageTitle'>Karier</h4>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      {isOpen ? (
        <div className='adminPopup'>
          <form onSubmit={handleClick} className='adminPopup-container'>
            <div className='inputGeneral'>
              <h4>Karier Oluştur</h4>
              <input
                onChange={handleInputChange}
                className='inputGeneral-input'
                placeholder='Karier Başlığı'
                name='title'
                value={inputData.title}
                type="text"
              />
              <textarea
                onChange={handleInputChange}
                className='inputGeneral-input'
                placeholder='Metin'
                name='text'
                value={inputData.text}
                type="text"
              ></textarea>
              <textarea
                onChange={handleInputChange}
                className='inputGeneral-input'
                placeholder='Karier URL'
                name='url'
                value={inputData.url}
                type="text"
              ></textarea>
              <input
                onChange={handleInputChange}
                className='inputGeneral-input'
                placeholder='Karier Buton Metni'
                name='buttonText'
                value={inputData.buttonText}
                type="text"
              />
              <input
                onChange={handleInputChange}
                className='inputGeneral-input'
                name='img'
                value={inputData.img}
                type="file"
                disabled
                required
              />
            </div>
            <AdminButton type="submit" text={"Karier Oluştur"} />
            <div onClick={() => handleOpenClose()} className='adminPopup-container-close'>
              X
            </div>
          </form>
        </div>
      ) : null}

      <AdminButton text={"Karier Oluştur"} onClicks={() => handleOpenClose()} />
    </div>
  )
}

export default Career;
