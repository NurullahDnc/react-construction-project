import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    Project: []
}

const getProject = createAsyncThunk('getProject', async ()=>{
    const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
    return data
})

export const ProjectSlice = createSlice({
    name: 'Project',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder.addCase(getProject.fulfilled,(state, action)=>{
            
        } )
    }
})

