import React, { useState } from 'react'
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
import { GiHamburgerMenu } from "react-icons/gi";


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
    const [openMenu, setOpenMenu] = useState(false)
    const { user, logout } = useSelector((state) => state.auth)
    // console.log(users, "as");


    if (!user) {
        navigate("/admin/")
    }

    const auth = getAuth();

    const handleLogout = async () => {
        dispatch(logoutHandle())
        await signOut(auth).then(() => {
            toast.success("Çıkış işlemi başarıyla gerçekleşti");
            navigate("/")

        }).catch((error) => {
            toast.error("Çıkış yapma sırasında bir hata oluştu, tekrar deneyiniz", error);
        });

    }

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }

    console.log(openMenu);

    return (
        <nav className={`AdminMenu ${openMenu? AdminMenu: ""} `} >
            <div className="AdminMenu-title">
                <Link to="/" className="AdminMenu-title d-flex align-items-center   text-white text-decoration-none">
                    <span className=" fs-4 ">Admin Panel</span>

                </Link>
                <div onClick={toggleMenu} className='AdminMenu-title-hamburgerMenu'><GiHamburgerMenu size={27} /> </div>
            </div>

            <hr className='AdminMenu-hr' />
            <ul className="AdminMenu-item nav nav-pills flex-column mb-auto">
                {navLinks.map((link) => (
                    <li className=" nav-item" key={link.id}>
                        <Link to={`/admin/${link.url}`} className="AdminMenu-items " aria-current="page">
                            {link.icon && <link.icon className="pr-2" />}
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr className='AdminMenu-hr' />

            <div className="AdminMenu-user  ">
                <div className='AdminMenu-user-info'>
                    <strong>{user.email}</strong> {/* Kullanıcı adını burada göster */}

                    <button className='AdminMenu-user-info-btn' onClick={handleLogout} >Cıkış yap</button>

                </div>

            </div>
        </nav>

    )
}

export default AdminMenu


