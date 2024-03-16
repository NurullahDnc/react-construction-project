import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../../redux/ServiceSlice';
import AdminButton from '../general/AdminButton';

const AboutUpdate = () => {

    const { id } = useParams();

    const [valueData, setValueData] = useState(
        {
            id: id,
            title: "",
            text: "",
      
          } 
    );

    const navigate = useNavigate();
    const {user} = useSelector((state)=> state.auth)

    if (!user) {
        navigate("/admin/")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/aboutData/${id}`)
                   const{title, text} = res.data
                  setValueData({title, text})

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
            await axios.put(`http://localhost:3001/aboutData/${id}`, valueData);
            toast.success("Güncelleme başarılı");
            navigate("/admin/about");
            setTimeout(() => {
                navigate(0);
              }, 750);
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
                <h4 >Hakkımızda güncelle</h4>
                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='hizmetler Başlıgı'
                  name='title'
                  value={valueData.title}
                  type="text"
                />

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder='hizmetler icon'
                  name='text'
                  value={valueData.text}
                  type="text"
                />

               

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                  disabled
                  type="file"

                />

              </div>
                
                <AdminButton type="submit" text={"hizmet Güncelle"} />
                <div onClick={()=>navigate("/admin/about")} className='adminPopup-container-close'>X</div>
            </form>
        </div>
    );
}

export default AboutUpdate;










