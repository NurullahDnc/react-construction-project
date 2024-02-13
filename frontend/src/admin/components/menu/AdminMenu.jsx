import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutHandle } from '../../../redux/AuthSlice'
// logout tekrardan isim verdim hata veriyor caksıma?
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";


const AdminMenu = () => {

    const navLinks = [
        {
            id: 1,
            text: 'Dashboard',
            icon: MdDashboard,
            url: 'dashboard'
        },
        {
            id: 2,
            text: 'Projeler',
            icon: FaCity,
            url: 'projects'
        },
        {
            id: 3,
            text: 'Hizmetler',
            icon: FaCity,
            url: 'services'
        },
        {
            id: 4,
            text: 'hakkımızda',
            icon: FaCity,
            url: 'about'
        },
        {
            id: 5,
            text: 'Karier',
            icon: FaCity,
            url: 'career'
        },
        {
            id: 6,
            text: 'Mesajlar',
            icon: AiFillMessage,
            url: 'message'
        },
        {
            id: 7,
            text: 'Yeni Kulanıcı',
            icon: FaUser,
            url: 'user'
        }
    ]

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, logout } = useSelector((state) => state.auth)
    // console.log(users, "as");


    if (!user) {
        navigate("/")
    }

    const auth = getAuth();

    const handleLogout = async () => {
        dispatch(logoutHandle())
        await signOut(auth).then(() => {
            toast.success("Çıkış işlemi başarıyla gerçekleşti");
            navigate("/admin/")

        }).catch((error) => {
            toast.error("Çıkış yapma sırasında bir hata oluştu, tekrar deneyiniz", error);
        });

    }
    return (
        <nav className='AdminMenu'>

            <ol className='AdminMenu-container'>
                <div className='AdminMenu-container-user'>
                    {
                        user ? <div className='AdminMenu-container-user-name'>
                            {
                                user?.email
                            }
                        </div> : <p>Giris yapınız</p>
                    }

                    <button className='AdminMenu-container-user-btn' onClick={handleLogout} >Cıkış yap</button>

                </div>
                {
                    navLinks.map((item, i) => (

                        <li key={i} className='AdminMenu-container-item'>

                            {item.icon && <item.icon />}
                            <Link to={item.url}  >{item.text} </Link>
                        </li>
                    ))
                }


            </ol>
        </nav>
    )
}

export default AdminMenu
