import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

const initialState = {
    message: [],
    error: null,
};

// Firebase üzerinden mesajları getiren asenkron eylem
export const getMessage = createAsyncThunk("message/getMessage", async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "message"));
        const messages = querySnapshot.docs.map((doc) => doc.data());
        return messages;
    } catch (error) {
        throw error;
    }
});

const MessageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMessage.fulfilled, (state, action) => {
            state.message = action.payload;
        });
        builder.addCase(getMessage.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});

export default MessageSlice.reducer;
