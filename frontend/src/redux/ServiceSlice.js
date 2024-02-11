

// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    service: [],
   
};

//project getiriyor
export const getService = createAsyncThunk('getService', async () => {
    const res = await axios.get(`http://localhost:3001/servicesProduct`);
    return res.data;
});




const ServiceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getService.fulfilled, (state, action) => {
            state.service = action.payload;
         });

        builder.addCase(getService.rejected, (state, action) => {

            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error.stack
            }
        });

        

    },
});

export default ServiceSlice.reducer;
