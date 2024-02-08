import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import AdminButton from '../general/AdminButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategory } from '../../../redux/ProjectSlice';  
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { v4 as uuidv4 } from 'uuid';


export default function Projects() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const { project } = useSelector((state) => state.project)
  const { category } = useSelector((state) => state.category)
  const dispacth = useDispatch();

  // const {user} = useSelector((state)=> state.auth)
  // console.log(user,"xx");

  const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
 }
 

  useEffect(() => {
    dispacth(getCategory())
  }, [dispacth])

  //input verisni tutuyor
  const [inputData, setInputData] = useState(
    [{
      id: "id",
      title: "title",
      text: "text",
      img: "img",
      category: "",

    }]
  );

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'title', width: 150 },
    { field: 'text', headerName: 'text', width: 250 },
    { field: 'img', headerName: 'img', width: 250 },
    { field: 'category', headerName: 'category', width: 100 },

    {
      field: "delete",
      headerName: "delete",
      width: 100,
      renderCell: (params) => {
        return (
          //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
          <button onClick={() => handleDelete(params)} className="mx-4 text-red-500 cursor-pointer ">
            <RiDeleteBin6Line size={24} />
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
          <button onClick={() => navigate(`/admin/productupdate/${params.id}`)} className="mx-4 text-red-500 cursor-pointer ">
            <RxUpdate size={24} />
          </button>
        )
      }
    },
  ];

  //reduxtan gelen veri uzerinde map don ekrana bastır
  const rows = project.map((item) => (
    {
      id: item.id,
      title: item.title,
      text: item.text,
      img: item.img,
      category: item.category

    }))


  //delete
  const handleDelete = async (params) => {
    console.log(params.id);
    const id = params.id
    axios.delete(`http://localhost:3001/project/${id}`)
      .then(() => {
        toast.success("silme islemi basarılı")
        navigate(0);
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

    await axios.post("http://localhost:3001/project/", inputData)
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
    <div  >
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
                <h4 >Proje Ekle</h4>
                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='Proje Başlıgı'
                  name='title'
                  value={inputData.title}
                  type="text"
                  required
                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='Proje Metini'
                  name='text'
                  value={inputData.text}
                  type="text"
                  required

                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                  value={inputData.img}
                  type="file"
                  required

                />

              </div>

              <div className='category'>
                <select name='category' onChange={handleInputChange} className="form-select category-selectet " aria-label="Default select example">
                  <option disabled selected>Kategori Seç</option>

                  {
                    category.map((item, i) => <option key={i} value={inputData.category}>{item.name} </option>)
                  }

                </select>
              </div>


              <AdminButton type="submit" text={"Proje Oluştur"} />
              <div onClick={() => handleOpenClose()} className='adminPopup-container-close'>
                X
              </div>
            </form>


          </div>

        ) : ""
      }
      <AdminButton text={"Proje Olustur"} onClicks={() => handleOpenClose()} />

    </div>
  );
}


/*onClick={() => handleDelete(params.row.id, params.row.image)} */