import React, { useState } from 'react'
import PageContainers from '../../Containers/PageContainers'
import AdminButton from '../components/general/AdminButton'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../config/FirebaseConfig'
import {login as loginHandle } from '../../redux/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const {user} = useSelector((state)=> state.auth)

    if (!user) {
      navigate("/")
   }
   
    const auth = getAuth();

    const handleRegister= async ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            toast.success("basarılı");
            dispatch(loginHandle(user))
            navigate("/admin/Dashboard");

          })
          .catch((error) => {
            const errorCode = error.code;
             
            switch (errorCode) {
                case "auth/invalid-email":
                    toast.error("Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.")
                    break;
                    
                case "auth/email-already-in-use":
                    toast.error("e-posta adresi zaten bir kullanıcı tarafından kullanılmaktadır");
                    break;
                case "auth/weak-password":
                    toast.error("Lütfen daha güçlü bir şifre oluşturun. En az 6 karakter uzunluğunda olmalıdır.");
                    break;
            
                default:
                    toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
                    break;
            }

          });

    }
 
    
    return (
        <PageContainers>
            <div className='register'>
                <h3 className='pageTitle' >Kulanıcı olsuturma</h3>
                <div className='register-inputGeneral'>
                    <input
                        className='inputGeneral-input'
                        placeholder='Kulanıcı adı'
                        name='name'
                        type="email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />


                    <input
                        className='inputGeneral-input'
                        placeholder='Sifre'
                        name='password'
                        value={password}
                        type="password"
                        onChange={e=> setPassword(e.target.value)}
                        
                    />

                    <AdminButton onClicks={handleRegister} text={"Kulanıcı Oluştur"} />

                </div>

            </div>
        </PageContainers>
    )
}

export default Register
