

import React,{useEffect,useState} from 'react';
import './card.css'
import db from '../../infrastructure/api/fire-credential';

export const Card = ({ id,person }) => {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirmed = async (currentID) => {
        console.log('Asistiras',currentID)
        await db.collection("invitados ").doc(currentID).update({confirmado:true,asistencia:true})
        setConfirmed(true)
    }
    const handleNoConfirmed = async(currentID) => {
        console.log('No Asistira',currentID)
        await db.collection("invitados ").doc(currentID).update({confirmado:true,asistencia:false})
        setConfirmed(true)
    }

    useEffect( ()=> {
    },[confirmed])
    
   
    return (   
        <>{ !person.confirmado && !confirmed ?
         <div className='card-bape'> 
            <div className='card-header'>
                <h2 className='card-title'>Hola, {person.nombre + ' '+person.apellidos}</h2>
                <br/>
                <p className='card-message'>Estamos super felices que hagas parte de nuestro sueño.</p>
            </div>
            <div className='d-flex buttons-actions'>

                <span className='btn btn-success ml-2' onClick={() => { handleConfirmed(person.id)}} > ASISTIRE </span>
                <span  className='btn btn-danger mr-2' onClick={() => {handleNoConfirmed(person.id)}}> NO ASISTIRE </span>
                
            </div>
         </div> : <h3 className='text-muted mt-4'> Muchas gracias por confirmar {person.nombre +' '+ person.apellidos}! </h3>
        }
        </>
    )
}