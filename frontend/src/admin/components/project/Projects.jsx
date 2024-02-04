import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Input from '../general/Input';
import AdminButton from '../general/AdminButton';
 


export default function Projects() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState([
    {
      id: "id",
      title: "title",
      text: "text",
      img: "img",
      category: "",

    }
  ]);


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 130 },
    { field: 'text', headerName: 'text', width: 130 },
    { field: 'img', headerName: 'img', width: 130 },
    { field: 'category', headerName: 'category', width: 130 },

    {
      field: "delete",
      headerName: "delete",
      width: 100,
      renderCell: (params) => {
        return (
          //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
          <button onClick={() => handleDelete(params)} className="mx-4 text-red-500 cursor-pointer ">
            Sil
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
          <button onClick={()=> navigate(`/admin/productcreate/${params.id}`) } className="mx-4 text-red-500 cursor-pointer ">
            Güncelle
          </button>
        )
      }
    },
  ];

  const rows = [
    { id: 1, title: 'Snow', text: 'Jon', img: 35, category: "asda", delete: "", update: "" },
    { id: 10, title: 'Snow', text: 'Jon', img: 35, category: "asda", delete: "", update: "" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleDelete = async (params) => {
    console.log(params.id);
    const { id } = params.id
    const res = axios.delete(`/api/${id}`)
      .then((res) => {
        toast.success("silme islemi basarılı")
      })
      .catch((err) => {
        toast.error("silme isleminde hata olustu")
      })
  }

  const handleCreateClose = () => {
    setIsOpen(!isOpen)
  }

  const handleCreateOpen = () => {

    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));  
  };

  const handleClick =async (e) => {
    e.preventDefault();
    
    const res = await axios.post("/api/",inputData)
    .then((res)=>{
      toast.success("başsarılı sekilde eklendi")
      console.log(inputData);
      setInputData({title: "", text: "", img: "" })
    })
    .catch((err)=>{
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
                <select name='category' onChange={handleInputChange} class="form-select category-selectet " aria-label="Default select example">
                  <option disabled selected>CategoryTitle</option>
                  <option value={inputData.category}>İnssat</option>
                  <option value={inputData.category}>depo</option>
                  <option value={inputData.category}>deneme</option>


                </select>
              </div>


              <AdminButton type="submit" text={"Proje Oluştur"} />
              <div onClick={() => handleCreateClose()} className='adminPopup-container-close'>
                X
              </div>
            </form>


          </div>

        ) : ""
      }
      <AdminButton text={"Proje Olustur"} onClicks={() => handleCreateOpen()} />

    </div>
  );
}


/*onClick={() => handleDelete(params.row.id, params.row.image)} */