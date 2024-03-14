// ProjectSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../config/FirebaseConfig'; 

// Firebase üzerinden veri getiren asenkron eylem
export const getService = createAsyncThunk('getService', async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'servicesProduct'));
        return querySnapshot.docs.map(doc => doc.data()); 
    } catch (error) {
        throw error; 
    }
});
 
const ServiceSlice = createSlice({
    name: 'service',
    initialState: {
        service: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getService.fulfilled, (state, action) => {
                state.service = action.payload; // Başarılı bir şekilde alınan verileri store'a kaydedin
             })
            .addCase(getService.rejected, (state, action) => {
                state.error = action.error.message; // Hata durumunda hatayı store'a kaydedin
            });
    },
});

export default ServiceSlice.reducer;
