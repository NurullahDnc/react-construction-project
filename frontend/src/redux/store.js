import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './ProjectSlice';
import MessageSlice from './MessageSlice';
import AuthSlice from './AuthSlice'
import ServiceSlice from './ServiceSlice'
import CareerSlice from './CareerSlice'
import AboutSlice from './AboutSlice'
import DarkModeSlice from './DarkModeSlice'



const store = configureStore({
  reducer: {
    project: ProjectSlice,
    loading: ProjectSlice,
    category: ProjectSlice,
    message: MessageSlice,
    auth: AuthSlice, 
    service: ServiceSlice,
    career: CareerSlice,
    about: AboutSlice,
    darkMode: DarkModeSlice
    
  },
});

export default store;


/*


 loading: LoadingSlice, // Burada LoadingSlice yerine ilgili reducer'ı eklemelisiniz
    category: CategorySlice, 
    */