import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../../redux/ServiceSlice';
import AdminButton from '../general/AdminButton';

const ServiceUpdate = () => {

    const { id } = useParams();

    const [valueData, setValueData] = useState(
        {
            id: id,
            title: "",
            textone: "",
            texttwo: "",
            img: "",
            icon: "",
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
                const res = await axios.get(`http://localhost:3001/servicesProduct/${id}`)
                   const{title, textone, texttwo, img, icon} = res.data
                  setValueData({title, textone, texttwo, img, icon})

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
            await axios.put(`http://localhost:3001/servicesProduct/${id}`, valueData);
            toast.success("Güncelleme başarılı");
            navigate("/admin/services");
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
                <h4 >hizmet güncelle</h4>
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
                  name='icon'
                  value={valueData.icon}
                  type="text"
                />

                <textarea
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' Metini1'
                  name='textone'
                  value={valueData.textone}
                  type="text"
                  rows={4}


                ></textarea>

                <textarea
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  placeholder=' Metini2'
                  name='texttwo'
                  value={valueData.texttwo}
                  type="text"
                  rows={4}

                ></textarea>

                <input
                  onChange={handleInputChange}
                  className='inputGeneral-input'
                  name='img'
                //   value={valueData.img}
                  type="file"

                />

              </div>
                
                <AdminButton type="submit" text={"hizmet Güncelle"} />
                <div onClick={()=>navigate("/admin/services")} className='adminPopup-container-close'>X</div>
            </form>
        </div>
    );
}

export default ServiceUpdate;










