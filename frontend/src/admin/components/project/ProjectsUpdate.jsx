import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import AdminButton from '../general/AdminButton';

const ProjectsCreate = () => {

    const { id } = useParams();
    const [valueData, setValueData] = useState(
        {
            id: "id",
            title: "title",
            text: "text",
            img: "img",
            category: "",
        }
    );

     const [updateData, setUpdateData] = useState(
        {
            id: "id",
            title: "title",
            text: "text",
            img: "img",
            category: "",
        }
    );

    //ürünleri getirme
    useEffect(() => {
        const res = axios.get("/a/a" + id)
            .then((res) => {

                setValueData({ ...valueData, name: res.data.name })
                console.log(res, "res");
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    //ürünü güncelleme
    const handleClick = async () => {

        const res = axios.put("/a/a" + id,)
        try {

        } catch (error) {

        }
    }

 
    const handleInputChange = (e) => {
        setUpdateData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

 

    return (
        <div  >
        <form onSubmit={handleClick} className='adminPopup-container' >

            <div className='inputGeneral'>
                <h4 >Proje Güncelle</h4>
                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='Proje Başlıgı'
                  name='title'
                  value={valueData.title}
                  type="text"
                  required
                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='Proje Metini'
                  name='text'
                  value={valueData.text}
                  type="text"
                  required

                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                //   value={valueData.img}
                  type="file"
                  required

                />

              </div>

                <div className='category'>
                    <select name='category' onChange={handleInputChange} class="form-select category-selectet " aria-label="Default select example">
                        <option value={valueData.category} disabled selected>CategoryTitle</option>


                    </select>
                </div>


                <AdminButton type="submit" text={"Proje Oluştur"} />
                <div   className='adminPopup-container-close'>
                    X
                </div>
            </form>
        </div>
    )
}

export default ProjectsCreate
