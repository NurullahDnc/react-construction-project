// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    project: [],
    category: [],
    loading: false,
    error: null,
};

//project getiriyor
export const getProject = createAsyncThunk('getProject', async () => {
    const res = await axios.get(`http://localhost:3001/project`);
    return res.data;
});

//category getiriyor
export const getCategory = createAsyncThunk('getCategory', async ()=>{
    const res = await axios.get('http://localhost:3001/category');
    return res.data
} )


const ProjectSlice = createSlice({
    name: 'Project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getProject.fulfilled, (state, action) => {
            state.project = action.payload;
            state.loading = false;
        });

        //pending durumunda true yap, üste yüklendikten sonra false yapıcaz
        builder.addCase(getProject.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(getProject.rejected, (state, action) => {

            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error.stack
            }
        });

        //category

        builder.addCase(getCategory.fulfilled, (state, action)=>{
            state.category = action.payload;

        })


        

    },
});

export default ProjectSlice.reducer;
