import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Le réducteur est utilisé pour gérer l'état de l'authentification
  },
})