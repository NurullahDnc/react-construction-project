// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../config/FirebaseConfig'; 

// Firebase üzerinden veri getiren asenkron eylem
export const getAbout = createAsyncThunk('getAbout', async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'aboutData'));
        return querySnapshot.docs.map(doc => doc.data()); 
    } catch (error) {
        throw error; 
    }
});
 
const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        about: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAbout.fulfilled, (state, action) => {
                state.about = action.payload; // Başarılı bir şekilde alınan verileri store'a kaydedin
            })
            .addCase(getAbout.rejected, (state, action) => {
                state.error = action.error.message; // Hata durumunda hatayı store'a kaydedin
            });
    },
});

export default aboutSlice.reducer;
