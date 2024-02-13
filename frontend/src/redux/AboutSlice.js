

// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    about: [],
   
};

//project getiriyor
export const getAbout = createAsyncThunk('getAbout', async () => {
    const res = await axios.get(`http://localhost:3001/aboutData`);
    return res.data;
});




const AboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAbout.fulfilled, (state, action) => {
            state.about = action.payload;
         });

        builder.addCase(getAbout.rejected, (state, action) => {

            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error.stack
            }
        });

        

    },
});

export default AboutSlice.reducer;
