import React, { useState } from 'react'
import PageContainers from '../../Containers/PageContainers'
import AdminButton from '../components/general/AdminButton'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate()
    
    const [inputData, setInputData] = useState(
        {
            name: "",
            password: ""
        }
    );

    const handleChange =(e)=>{
    
        setInputData((prevData)=>({
            ...prevData, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =()=>{
    
        if (inputData.name == "admin" && inputData.password ==123 ) {
        
            navigate("/admin/dashboard/")
        }
    }

    
    return (
        <PageContainers>
            <div className='login'>
                <div className='login-inputGeneral'>
                    <h3 >Admin Panel</h3>
                    <input
                        className='inputGeneral-input'
                        placeholder='Kulanıcı adı'
                        name='name'
                        type="text"
                        value={inputData.name}
                        onChange={handleChange}
                    />


                    <input
                        className='inputGeneral-input'
                        placeholder='Sifre'
                        name='password'
                        value={inputData.password}
                        type="password"
                        onChange={handleChange}
                        
                    />

                    <AdminButton onClicks={handleSubmit} text={"Giriş yap"} />


                </div>

            </div>
        </PageContainers>
    )
}

export default Login
