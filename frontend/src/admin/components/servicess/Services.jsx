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


const Services = () => {

  const dispacth = useDispatch();
  const { service } = useSelector((state) => state.service)
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

 
  //input verisni tutuyor
  const [inputData, setInputData] = useState(
    {
      id: "",
      title: "",
      textone: "",
      texttwo: "",
      img: "",
      icon: "",
    }
  );

  useEffect(() => {
    dispacth(getService())
  }, [dispacth])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 150 },
    { field: 'textone', headerName: 'textone', width: 210 },
    { field: 'texttwo', headerName: 'texttwo', width: 210 },
    { field: 'img', headerName: 'img', width: 130 },
    { field: 'icon', headerName: 'icon', width: 100 },

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
          <button onClick={() => navigate(`/admin/services/Update/${params.id}`)} className="mx-4 text-red-500 cursor-pointer ">
            <RxUpdate size={25} />
          </button>
        )
      }
    },
  ];

  const rows = service.map(item => (
    {
      id: item.id,
      img: item.img,
      icon: item.icon,
      title: item.title,
      textone: item.textone,
      texttwo: item.texttwo
    }
  ))


  const handleDelete = async (params) => {
    // console.log(params.id);
    const id = params.id
     const res = axios.delete(`http://localhost:3001/servicesProduct/${id}`)
      .then((res) => {
        toast.success("silme islemi basarılı")
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

    await axios.post("http://localhost:3001/servicesProduct/", inputData)
      .then(() => {
        toast.success("başsarılı sekilde eklendi")
        setIsOpen(!isOpen)
        navigate(0)

        setInputData({ title: "", text: "", img: "" })

      })
      .catch((err) => {
        toast.error("Bir hata olsutu", err.status)
        console.log(err);
      })


  }


  return (
    <div style={{ height: 650, width: '100%' }}>
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
                <h4 >hizmet oluştur</h4>
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
                  placeholder='hizmetler icon'
                  name='icon'
                  value={inputData.icon}
                  type="text"
                />

                <textarea
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' Metini1'
                  name='textone'
                  value={inputData.textone}
                  type="text"

                ></textarea>

                <textarea
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' Metini2'
                  name='texttwo'
                  value={inputData.texttwo}
                  type="text"

                ></textarea>

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                  value={inputData.img}
                  type="file"

                />

              </div>

              <AdminButton type="submit" text={"Proje Oluştur"} />
              <div onClick={() => handleOpenClose()} className='adminPopup-container-close'>
                X
              </div>
            </form>


          </div>

        ) : ""
      }

      <AdminButton text={"hizmet Oluştur"} onClicks={() => handleOpenClose()} />

    </div>
  )
}

export default Services
