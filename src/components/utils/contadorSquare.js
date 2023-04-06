import './contador.css';
import React from 'react';

export const ContadorBox = ({dia,hora,minutos}) => {
    
    return (
    <>
        <div className='d-flex justify-content-center'>
            <div className='box'>
                <h1 className='title'> Días </h1>
                <span className='number'>{dia < 0 ? '00': dia}</span>
            </div>
            <div className='box'>
                <h1 className='title'> Hora </h1>
                <span className='number'>{hora < 0 ? '00': hora}</span>
            </div>
            <div className='box'>
                <h1 className='title'> Minutos </h1>
                <span className='number'>{minutos < 0 ? '00': minutos}</span>
            </div>
        </div>
    </>
  );
};
