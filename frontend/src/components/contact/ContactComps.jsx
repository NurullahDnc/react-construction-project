import React, { useState } from 'react'
import Heading from '../general/Heading'
import Button from '../general/Button'
import axios from 'axios';
import { toast } from 'react-toastify';


export default function ContactComps() {

  const [inputData, setInputData] = useState(
    {
      name: "",
      surname: "",
      mail: "",
      title: "",
      text: "",
    }
  );

  const handleChange = (e) => {

    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(inputData);

    
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", inputData)
      if (res.status == 200 || res.status == 201) {
        console.log("form basarılı bir sekilde gonderildi.");
        toast.success("Mesajınız Gonderildi");

      } else {
        console.log("form gonderilirken bir hata olustu.", res.status);
        toast.error("Mesajınız gonderilirken hata olsutu", res.status);

      }

    } catch (error) {
      console.log("bir hata olsutu", error);
      toast.error("bir hata olustu", error);

    }

    setInputData({ name: "", surname: "", mail: "", title: "", text: "", })
  }

  return (
    <div>
      <Heading text={"bize Ulaşın"} title={"Teklif Talepleri ya da Sorular:"} p={"Lütfen formu doldurun ya da bizi arayın: (212) 234 56 78"} />

      <div className='ContactComps'>
        <form className='ContactComps-form' onSubmit={handleClick} >
          <div className='ContactComps-form-item' >
            <input onChange={handleChange} value={inputData.name} name='name' type="text" placeholder='Adı' required />
            <input onChange={(e) => handleChange(e)} value={inputData.surname} name='surname' type="text" placeholder='Soyadı' />
          </div>
          <div className='ContactComps-form-item' >
            <input onChange={handleChange} value={inputData.mail} name='mail' type="text" placeholder='E-Posta' required />
            <input onChange={handleChange} value={inputData.title} name='title' type="text" placeholder='konu' />
          </div>
          <div className='ContactComps-form-item' >
            <textarea onChange={handleChange} value={inputData.text} name='text' placeholder='Mesaj' id="" cols="40" rows="15" required></textarea>
          </div>
          <Button type="submit" text="Gonder" />
        </form>

        <div className='ContactComps-img'>
          <img src="c837a6_136f489b41d445c38ff79f772d719210~mv2.webp" alt="" />
        </div>
      </div>
    </div>
  )
}
