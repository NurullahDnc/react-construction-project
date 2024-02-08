import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
 import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { getMessage } from '../../redux/MessageSlice';
 

export default function Message() {
  const navigate = useNavigate();
  const {message} = useSelector((state)=> state.message)
  const dispacth = useDispatch();

   const {user} = useSelector((state)=> state.auth)

  if (!user) {
    navigate("/")
  }

  useEffect(() => {
    dispacth(getMessage())
  }, [dispacth])


  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'name', width: 120 },
    { field: 'surname', headerName: 'surname', width: 120 },
    { field: 'text', headerName: 'text', width: 250 },

    { field: 'mail', headerName: 'mail', width: 200 },
    { field: 'title', headerName: 'title', width: 70 },

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
      field: "cevapla",
      headerName: "cevapla",
      width: 100,
      renderCell: (params) => {
        return (
          //ürünün id ve resmi paramete olarak gonderiyoruz iki taraftan silmesi icin
          <button onClick={() => navigate(`/admin/productupdate/${params.id}`)} className="mx-4 text-red-500 cursor-pointer ">
            <TbMessageCircle2Filled size={24} />
          </button>
        )
      }
    },
  ];

  //reduxtan gelen veri uzerinde map don ekrana bastır
  const rows = message.map((item) => (
    {
      id: item.id,
      name: item.name,
      surname: item.surname,
      text: item.text,
      mail: item.mail,
      title: item.title

    }))


  //delete
  const handleDelete = async (params) => {
    console.log(params.id);
    const id = params.id
    axios.delete(`http://localhost:3001/message/${id}`)
      .then(() => {
        toast.success("silme islemi basarılı")
        navigate(0)
      })
      .catch((err) => {
        toast.error("silme isleminde hata olustu", err)
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

    </div>
  );
}


/*onClick={() => handleDelete(params.row.id, params.row.image)} */