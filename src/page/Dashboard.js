
import 'moment/locale/es';
import React, { useState,useEffect } from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import  Table  from '../components/ui/table';
import { ExcelImportButton } from '../components/utils';
import db from '../infrastructure/api/fire-credential';


export const Dashboard = () => {
    const [toggleInvitados, setToggleInvitados] = useState(false);
    const [toggleTable, setToggleTable] = useState(false);
    const navigate = useNavigate();
    const { usuarioLogged, logOut } = useUserAuth();

    const CLIENTE_ID = '1118536246'    
    const [invitados, setInvitados] = useState([])
    
    const getInvitados = async() => {
        db.collection('invitados ').where("id_cliente", "==",CLIENTE_ID)
        .onSnapshot( (snapshot) => { 
            let docs = [];
            snapshot.forEach(doc => 
                docs.push({
                    ...doc.data(),
                    id:doc.id,
                    nombreCompleto:doc.data().nombre.toLowerCase()+' '+doc.data().apellidos.toLowerCase()
                })    
            )
            let invitadosActuales = docs.filter(invitado => invitado.id_cliente === CLIENTE_ID)
            
            setInvitados(invitadosActuales)
        },(err)=> console.log(err))
    }
    useEffect(() => {
        getInvitados()
    }, [])

    async function handleLogOut() {
        try {
            await logOut();
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }


    const handleToogleInvitados = () => {
        setToggleInvitados(!toggleInvitados);
    }

    const handleToogleTable = () => {
        setToggleTable(!toggleTable);
    }


    return (
        <>
            <div className="wrapper d-flex align-items-stretch">
                <nav id="sidebar" className="active">
                    <h1><a href="index.html" className="logo">Bodas</a></h1>
                    <ul className="list-unstyled components mb-5">
                        <li >
                            <span onClick={handleToogleInvitados}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
                            </svg>
                                Importar Invitados</span>
                        </li>
                        <li>
                            <span onClick={handleToogleTable}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg> Tabla invitados</span>
                        </li>
                        <li>
                            <span onClick={handleLogOut} className='logout'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plug-fill" viewBox="0 0 16 16">
                                    <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z"/>
                                    </svg>
                                logOut </span>
                        </li>
                    </ul>
                </nav>

                <div id="content" className="p-4 p-md-5">
                    <div className="header-dash shadow-none p-3 mb-3 bg-light rounded">
                        <h1> Administrador</h1>
                        <p className='text-muted'>{usuarioLogged.email}</p>
                    </div>

                    {toggleInvitados ? <ExcelImportButton/> : null}

                    {toggleTable ? 
                        <Table people={invitados}/>   
                    : null}
                </div>
            </div>
            {/*
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Dashboard</h1>
                    <p>Bienvenido {usuarioLogged.email}</p>
                    <ExcelImportButton/>
                    <button className='btn btn-danger' onClick={handleLogOut}>Cerrar sesion</button>
                </div>
            </div>
        </div> */}


        </>
    )
}