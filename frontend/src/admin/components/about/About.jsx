import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import AdminPopup from '../general/AdminPopup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getService } from '../../../redux/ServiceSlice';
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import AdminButton from '../general/AdminButton';
import { getAbout } from '../../../redux/AboutSlice';


const Services = () => {

  const dispacth = useDispatch();
  const { about } = useSelector((state) => state.about)
  const { service } = useSelector((state) => state.service)

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
 }

  //input verisni tutuyor add
  const [inputData, setInputData] = useState(
    {
      id: "",
      title: "",
      text: "",
    
    }
  );

  useEffect(() => {
    dispacth(getService())
    dispacth(getAbout())
  }, [dispacth])

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'title', width: 250 },
    { field: 'text', headerName: 'text', width: 450 },

    {
      field: "delete",
      headerName: "delete",
      width: 100,
      renderCell: (params) => {
        return (
          //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
          <button onClick={() => handleDelete(params)} className="mx-4 text-red-500 cursor-pointer ">
            <RiDeleteBin6Line size={25} />
          </button>
        )
      }
    },

    {
      field: "update",
      headerName: "update",
      width: 100,
      renderCell: (params) => {
        return (
          //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
          <button onClick={() => navigate(`/admin/about/Update/${params.id}`)} className="mx-4 text-red-500 cursor-pointer ">
            <RxUpdate size={25} />
          </button>
        )
      }
    },
  ];

  const rows = about.map(item => (
    {
      id: item.id,
      title: item.title,
      text: item.text

    }
  ))


  const handleDelete = async (params) => {
    // console.log(params.id);
    const id = params.id
     const res = axios.delete(`http://localhost:3001/aboutData/${id}`)
      .then((res) => {
        toast.success("silme islemi basarılı")

        setTimeout(() => {
            navigate(0);
          }, 750);

    })
      .catch((err) => {
        toast.error("silme isleminde hata olustu", err)
      })
  }

  //proje olsuturma popup kapat aç
  const handleOpenClose = () => {
    setIsOpen(!isOpen)
  }

  //inputtan veri alma
  const handleInputChange = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value, id: uuidv4()
    }));
  };


  //proje olustur
  const handleClick = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3001/aboutData/", inputData)
      .then(() => {
        toast.success("başsarılı sekilde eklendi")
        setIsOpen(!isOpen)

        setTimeout(() => {
            navigate(0);
          }, 750);
          
        setInputData({ title: "", text: ""})

      })
      .catch((err) => {
        toast.error("Bir hata olsutu", err.status)
        console.log(err);
      })


  }


  return (
    <div style={{ height: 600, width: '100%' }}>
        <h4>Hakkımzda</h4>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      {
        isOpen ? (
          <div className='adminPopup'  >
            <form onSubmit={handleClick} className='adminPopup-container' >

              <div className='inputGeneral'>
                <h4 >Hakkımızda oluştur</h4>
                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='hizmetler Başlıgı'
                  name='title'
                  value={inputData.title}
                  type="text"
                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='hizmetler text'
                  name='text'
                  value={inputData.text}
                  type="text"
                />


                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                  value={inputData.img}
                  type="file"
                  disabled
                />

              </div>

              <AdminButton type="submit" text={"Hakkımızda Oluştur"} />
              <div onClick={() => handleOpenClose()} className='adminPopup-container-close'>
                X
              </div>
            </form>


          </div>

        ) : ""
      }

      <AdminButton text={"Hakkımızda Oluştur"} onClicks={() => handleOpenClose()} />

    </div>
  )
}

export default Services
