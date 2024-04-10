import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice';
import profileReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Le réducteur est utilisé pour gérer l'état de l'authentification
    profile: profileReducer // Le réducteur est utilisé pour gérer les informations de l'utilisateur
  },
})