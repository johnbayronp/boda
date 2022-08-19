import React from 'react'

export const ToastSuccess = ({message}) => {

    return(
        <>{/*
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" visible="true">
                <div className="toast-header">
                    <img src="..." className="rounded mr-2" alt="..."/>
                    <strong className="mr-auto">Contraseña o Correo invalido</strong>
                    <small>Alerta</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Revisa tu correo electronico o contraseña
                </div>
            </div>
            */}
            <p className='alert alert-danger mt-3'>{message}</p>
        </>
    );
};
