import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import Heading from '../general/Heading';
import { useNavigate } from 'react-router';

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "cevrealanı.avif",
            title: "Cevre Alanları",
            buttontext: "Daha Fazla"
        },
        {
            id: 2,
            img: "villalar.avif",
            title: "Vilalar",
            buttontext: "Daha Fazla"
        },
        {
            id: 3,
            img: "icmekantasarım.jpg",
            title: "İç Mekanlar",
            buttontext: "Daha Fazla"
        },
    ]

    const navigate = useNavigate();

    useEffect(() => {
        ScrollReveal().reveal(".cart-item-overlay", {
            distance: "100px",
        })

    }, [])

    const handleClick =()=>{
        navigate("/project")
        window.scrollTo(0, 0)
    }

    return (
        <div className="cart">

            {
                data.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img
                            className="cart-item-img"
                            src={item.img}
                            alt="yuklenmedi"
                        />
                        <div className="cart-item-overlay">
                            <p className="cart-item-overlay-text">{item.title} </p>
                            <button onClick={handleClick} className="cart-item-overlay-button">{item.buttontext}</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Cart
