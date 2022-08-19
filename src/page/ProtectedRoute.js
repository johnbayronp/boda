import React from 'react'
import 'moment/locale/es';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export const ProtectedRoute = ({ children }) => {
    
    let {usuarioLogged} = useUserAuth();
    if(!usuarioLogged){
      console.log('No acceso')
       return <Navigate to="/login"/>; 
    }
  return children
}