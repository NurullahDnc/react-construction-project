import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../../redux/ServiceSlice';
import AdminButton from '../general/AdminButton';

const CareerUpdate = () => {

    const { id } = useParams();

    const [valueData, setValueData] = useState(
        {
            id: id,
            title: "",
            text: "",
            url: "",
            buttonText: "",
           } 
    );

    const navigate = useNavigate();
    const {user} = useSelector((state)=> state.auth)

    if (!user) {
        navigate("/")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/careerProduct/${id}`)
                console.log(res);
                   const{title, text, url, buttonText} = res.data
                  setValueData({title, text, url, buttonText})

            } catch (error) {
                console.error("hata olustu", error);
            }
        };
 
        fetchData();
    }, [id]);

    // Ürünü güncelleme
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3001/careerProduct/${id}`, valueData);
            toast.success("Güncelleme başarılı");
            navigate("/admin/career");
            navigate(0)

        } catch (error) {
            toast.error("Güncelleme sırasında hata oluştu", error);
         }
    };

    //inputtaki verileri state atıyor, degisklik olanı gunceliyor sadece
    const handleInputChange = (e) => {
        setValueData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
          }));
    };

    return (
        <div className='adminPopup'>
            <form onSubmit={handleClick} className='adminPopup-container'>
            <div className='inputGeneral'>
                <h4 >Karier güncelle</h4>

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='karier Başlıgı'
                  name='title'
                  value={valueData.title}
                  type="text"
                />

                <textarea
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' Metini'
                  name='text'
                  value={valueData.text}
                  type="text"
                  rows={4}

                ></textarea>


                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' karier url'
                  name='url'
                  value={valueData.url}
                  type="text"
                ></input>

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='karier button text'
                  name='buttonText'
                  value={valueData.buttonText}
                    
                  type="text"
                />

              <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                  value={valueData.img}
                  type="file"
                  disabled
                  required

                />

              </div>
                
                <AdminButton type="submit" text={"Proje Güncelle"} />
                <div onClick={()=>navigate("/admin/career")} className='adminPopup-container-close'>X</div>
            </form>
        </div>
    );
}

export default CareerUpdate;










