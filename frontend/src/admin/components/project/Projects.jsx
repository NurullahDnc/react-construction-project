import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Input from '../general/Input';
import Button from '../../../components/general/Button';
import AdminButton from '../general/AdminButton';
import AdminPopup from '../general/AdminPopup';



export default function Projects() {

    const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'title', width: 130 },
        { field: 'text', headerName: 'text', width: 130 },
        { field: 'img', headerName: 'img', width: 130 },
        { field: 'category', headerName: 'category', width: 130 },
      
        {field: "delete", 
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
      
              {field: "update", 
              headerName: "update", 
              width: 100,
              renderCell: (params) => {
               return (
                   //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
                   <button onClick={() => ""}  className="mx-4 text-red-500 cursor-pointer ">
                       Güncelle 
                   </button>
               )
              }
           },
      ];
      
      const rows = [
        { id: 1, title: 'Snow', text: 'Jon', img: 35, category: "asda", delete: "", update:"" },
        { id: 10, title: 'Snow', text: 'Jon', img: 35, category: "asda", delete: "", update:"" },

        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    const handleDelete = async (params)=>{
        console.log(params.id);
        const {id} = params.id
        const res = axios.delete(`/api/${id}`)
        .then((res)=>{
            toast.success("silme islemi basarılı")
        })
        .catch((err)=>{
            toast.error("silme isleminde hata olustu")
        })
    }

    // const handleCreateClose = ()=>{
    //   setIsOpen(!isOpen)
    // }
    
    // const handleCreateOpen = ()=>{
      
    //   setIsOpen(!isOpen)
    // }

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
      <AdminPopup placeholder={"adafa"} ButtonText={"urun ekle"} />

    </div>
  );
}


/*onClick={() => handleDelete(params.row.id, params.row.image)} */