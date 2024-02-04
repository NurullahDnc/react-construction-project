import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './ProjectSlice';

const store = configureStore({
  reducer: {
    project: ProjectSlice,
    loading: ProjectSlice
  },
});

export default store;
