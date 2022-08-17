import './contador.css';
import React from 'react';

export const ContadorBox = ({dia,hora,minutos}) => {

    return (
    <>
        <div className='d-flex justify-content-center'>
            <div className='box'>
                <h1 className='title'> Días </h1>
                <span className='number'>{dia}</span>
            </div>
            <div className='box'>
                <h1 className='title'> Hora </h1>
                <span className='number'>{hora}</span>
            </div>
            <div className='box'>
                <h1 className='title'> Minutos </h1>
                <span className='number'>{minutos}</span>
            </div>
        </div>
    </>
  );
};
