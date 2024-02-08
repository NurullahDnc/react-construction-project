import React, { useState } from 'react'
import PageContainers from '../../Containers/PageContainers'
import AdminButton from '../components/general/AdminButton'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/FirebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { login as loginHandle } from '../../redux/AuthSlice'
//login yeniden isimlendirme verdim karısmaması icin 

const Login = () => {

    // const { login } = useSelector((state) => state.auth)
    // console.log(user, "userrrrrrlog");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const auth = getAuth();

    const handleSubmit = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success("giris basarılı")
                //dispact ile kulanıcı giris yaptıgında user redux gonder, true olması ıcın
                dispatch(loginHandle(user))
                //mevcut kulanıcı giris yaptı, yeni kulanıcı eklenmez
                navigate("/admin/dashboard/", {
                    replace: true
                })

            })
            .catch((error) => {
                //hataları turkceye cevirme
                const errorCode = error.code;
                switch (errorCode) {
                    case "auth/invalid-credential":
                        toast.error("E-posta veya şifre hatalı. Lütfen doğru bilgileri girin.");
                        break;
                    case "auth/user-disabled":
                        toast.error("Kullanıcı devre dışı bırakılmış durumda.");
                        break;
                    case "auth/invalid-email":
                        toast.error("Geçersiz e-posta adresi. Lütfen doğru bir e-posta adresi girin.");
                        break;
                        
                    default:
                        toast.error("giriş sırasında bir hata olsutu. Lütfen tekrar deneyiniz.")
                        console.log(errorCode);
                        break;
                }

            });
    }


    return (
        <PageContainers>
            <div className='login'>
                <div className='login-inputGeneral'>
                    <h3 >Admin Panel Giriş</h3>
                    <input
                        className='inputGeneral-input'
                        placeholder='Kulanıcı adı'
                        name='name'
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />


                    <input
                        className='inputGeneral-input'
                        placeholder='Sifre'
                        name='password'
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}

                    />

                    <AdminButton type={"submit"} onClicks={handleSubmit} text={"Giriş yap"} />


                </div>

            </div>
        </PageContainers>
    )
}

export default Login
