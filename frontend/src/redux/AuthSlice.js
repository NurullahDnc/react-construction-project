import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    //user varsa true yap yoksa false yap
    user: JSON.parse(localStorage.getItem('user')) ?? false
};


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //login parametre alacak, kulanıcııyı localstore kayıt et, 
        login: (state, action) =>{
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        },
        logout:(state, action) =>{
            localStorage.removeItem('user')
            state.user = false
        }
    },
    
});

export const{login, logout} = AuthSlice.actions
export default AuthSlice.reducer;
