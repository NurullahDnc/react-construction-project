import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    career: []
}

export const getCareer = createAsyncThunk("getCareer", async() =>{
    const res = await axios.get(`http://localhost:3001/careerProduct`);
    return res.data
} )


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