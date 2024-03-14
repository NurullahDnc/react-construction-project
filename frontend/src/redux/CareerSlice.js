import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../config/FirebaseConfig'; 

// Firebase Firestore üzerinden iş kollarını getiren asenkron eylem
export const getCareer = createAsyncThunk("getCareer", async() =>{
    try {
        const querySnapshot = await getDocs(collection(db, 'careerProduct'));
        return querySnapshot.docs.map(doc => doc.data()); 
    } catch (error) {
        throw error; 
    }
} )

const initialState={
    career: []
}

const CareerSlice = createSlice({
    name: "career",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getCareer.fulfilled, (state, action)=>{
            state.career = action.payload
        })
    }   
})

export default CareerSlice.reducer
