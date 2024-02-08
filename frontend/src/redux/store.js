import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './ProjectSlice';
import MessageSlice from './MessageSlice';
import AuthSlice from './AuthSlice'

const store = configureStore({
  reducer: {
    project: ProjectSlice,
    loading: ProjectSlice,
    category: ProjectSlice,
    message: MessageSlice,
    auth: AuthSlice, 
    
  },
});

export default store;


/*


 loading: LoadingSlice, // Burada LoadingSlice yerine ilgili reducer'ı eklemelisiniz
    category: CategorySlice, 
    */