import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../config/FirebaseConfig'; 

// Firebase üzerinden proje verilerini getiren asenkron eylem
export const getProject = createAsyncThunk('getProject', async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'project'));
        return querySnapshot.docs.map(doc => doc.data()); 
    } catch (error) {
        throw error; 
    }
});

// Firebase üzerinden kategori verilerini getiren asenkron eylem
export const getCategory = createAsyncThunk('getCategory', async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'category'));
        return querySnapshot.docs.map(doc => doc.data()); 
    } catch (error) {
        throw error; 
    }
});

const ProjectSlice = createSlice({
    name: 'Project',
    initialState: {
        project: [],
        category: [],
        loadingProject: false,
        loadingCategory: false,
        errorProject: null,
        errorCategory: null,
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getProject.fulfilled, (state, action) => {
                state.project = action.payload;
                state.loadingProject = false;
            })
            .addCase(getProject.pending, (state, action) => {
                state.loadingProject = true;
            })
            .addCase(getProject.rejected, (state, action) => {
                state.errorProject = action.payload ? action.payload : action.error.stack;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.category = action.payload;
                state.loadingCategory = false;
            })
            .addCase(getCategory.pending, (state, action) => {
                state.loadingCategory = true;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.errorCategory = action.payload ? action.payload : action.error.stack;
            });
    },
});

export default ProjectSlice.reducer;
