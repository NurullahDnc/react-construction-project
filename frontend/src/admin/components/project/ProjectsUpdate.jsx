import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import AdminButton from '../general/AdminButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../../redux/ProjectSlice';

const ProjectsCreate = () => {

    const { id } = useParams();

    const [valueData, setValueData] = useState({
        id: id,
        title: "",
        text: "",
        img: "",
        category: "",
        
    });

    const navigate = useNavigate();
    const { category } = useSelector((state) => state.category)
    const dispacth = useDispatch();

    const {user} = useSelector((state)=> state.auth)

    if (!user) {
        navigate("/")
    }

    useEffect(() => {
        dispacth(getCategory())
    }, [dispacth])

    // Ürünleri getirme, destructuring yapısı ile state attık verileri, ordan da input valuelere
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/project/${id}`)
                //res.data al degiskenelere at, degiskenleri de usestate at
                  const{title, text, img, category} = res.data
                  setValueData({title, text, img, category})

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
            await axios.put(`http://localhost:3001/project/${id}`, valueData);
            toast.success("Güncelleme başarılı");
            navigate("/admin/projects");
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
                    <h4>Proje Güncelle</h4>
                    <input
                        onChange={handleInputChange}
                        className='inputGeneral-input'
                        placeholder='Proje Başlığı'
                        name='title'
                        value={valueData.title}
                        type="text"
                        required
                    />
                    <textarea
                        onChange={handleInputChange}
                        className='inputGeneral-input'
                        placeholder='Proje Metini'
                        name='text'
                        value={valueData.text}
                        type="text"
                        required
                        rows={5}

                    />
                    <input
                        onChange={handleInputChange}
                        className='inputGeneral-input'
                        name='img'
                        type="file"
                    />
                </div>
                <div className='category'>
                    <select
                        name='category'
                        onChange={handleInputChange}
                        value={valueData.category}
                        className="form-select category-selectet "
                        aria-label="Default select example"
                    >
                        <option disabled selected>Kategori Seç</option>
                        {category.map((item, i) => (
                            <option key={i} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <AdminButton type="submit" text={"Proje Güncelle"} />
                <div onClick={()=>navigate("/admin/projects")} className='adminPopup-container-close'>X</div>
            </form>
        </div>
    );
}

export default ProjectsCreate;










