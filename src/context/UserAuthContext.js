import React,{ createContext, useContext, useEffect, useState } from "react";
import {
    //createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth } from '../infrastructure/api'

const userAuthContext = createContext();


export function UserAuthContextProvider({children}){
    /* Crear cuenta
    const signUp = (email,password) {
        return createUserWithEmailAndPassword(email,password)
    }*/
    const [usuarioLogged,setUsuarioLogged] = useState('');
    
    function login(email,password) {
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    function logOut() {
        return signOut(auth)
    }
    
    const unsuscribe = onAuthStateChanged(auth,(currentUser)=> {
        setUsuarioLogged(currentUser);
    })

    useEffect(()=> {
            
        return(()=>{
            unsuscribe();
        })
    }) 


    return (
        <userAuthContext.Provider value={{unsuscribe,usuarioLogged,login,logOut}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}