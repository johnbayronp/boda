import React from 'react'
import {useUserAuth} from '../context/UserAuthContext';
import 'moment/locale/es';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    
    const navigate = useNavigate(); 
    const { usuarioLogged,logOut } = useUserAuth();

    async function handleLogOut (){
        try {
            await logOut();
            navigate('/login');
        }catch(err){
            console.log(err)
        }
    }

  return (
    <><div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Dashboard</h1>
                    <p>Bienvenido {usuarioLogged.email}</p>
        <button className='btn btn-danger' onClick={handleLogOut}>Cerrar sesion</button>
                </div>
            </div>
        </div>
    </> 
  )
}