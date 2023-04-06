import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom"
import './index.css'
import {ToastSuccess } from '../utils'
import { useUserAuth } from '../../context/UserAuthContext';
//import { auth } from '../../infrastructure/api';


export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const { usuarioLogged,login } = useUserAuth();
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await login(email,password) 
            navigate("/admin");
        }catch(err){
            setError("Email o Contraseña invalidos");
        }
    }

    function verify(){
        if(usuarioLogged){
            navigate('/admin')
        }
    }
    useEffect(()=>{
        verify()
    })

     /* <p> <Link to="/">Boda</Link></p>  links para otras routes*/ 
    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2 className='tilte-nav'>Nuestra Boda <br/></h2>
                    <p>Acceso para el administrador.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <h1 className='mb-2 title-header-form'> Administrador </h1>
                            <div className="form-group">
                                <label className='inpt'>Correo Electrónico</label>
                                <input onChange={(e)=>setEmail(e.target.value)}type="text" className="form-control mt-2 mb-2 inpt" placeholder="ex. pepito@correo.com"/>
                            </div>
                            <div className="form-group">
                                <label className='inpt'>Contraseña</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control mt-2 inpt" placeholder="Contraseña"/>
                            </div>
                            <button type="submit" className="btn btn-success mt-3">Iniciar Sesión</button>
                           { error ? <ToastSuccess message={error} /> : null }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};