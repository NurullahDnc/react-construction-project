// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    project: [],
    loading: false,
    error: null,
};

export const getProject = createAsyncThunk('getProject', async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
    return data;
});

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

    },
});

export default ProjectSlice.reducer;
