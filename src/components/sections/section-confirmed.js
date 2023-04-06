import React , {useEffect,useState} from 'react'
import './header.css'
import {ModalConfirmed} from '../utils/modal-confirmed';
import db from '../../infrastructure/api/fire-credential';

export const SectionConfirmed = () => {
    const CLIENTE_ID = "1102874619"
    const [invitados, setInvitados] = useState([])

    const getInvitados = async() => {
        db.collection('invitados ').where("id_cliente", "==",CLIENTE_ID)
        .onSnapshot( (snapshot) => { 
            let docs = [];
            snapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id:doc.id,
                    nombreCompleto:doc.data().nombre.toLowerCase()+' '+doc.data().apellidos.toLowerCase()
                })    }
            )
            let invitadosActuales = docs.filter(invitado => invitado.id_cliente === CLIENTE_ID)
            
            setInvitados(invitadosActuales)
        },(err)=> console.log(err))
    }
    useEffect(() => {
        getInvitados()
    }, [])
    
    return (
        <div className='d-flex section-container-back'>
            <div className='header-title'>
                <h1 className='title-bg'> Confirmar asistencia </h1>
                <ModalConfirmed people={invitados}/>
            </div>
        </div>
    )
}