

import React from 'react';
import './card.css'

export const Card = ({ id,person }) => {
   
    return (   
        <>
         <div className='card-bape'> 
            <div className='card-header'>
                <h2 className='card-title'>Hola, {person.nombre + ' '+person.apellidos}</h2>
                <br/>
                <p className='card-message'>Estamos super felices que hagas parte de nuestro sueño.</p>
            </div>
            <div className='d-flex buttons-actions'>

                <button className='btn btn-success ml-2' > ASISTIRE </button>
                <button  className='btn btn-danger mr-2' > NO ASISTIRE </button>
                
            </div>
         </div>
        </>
    )
}