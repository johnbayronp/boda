

import React, {  useState } from 'react';
import { Card } from './card';
import './modal.css'

export const ModalConfirmed = ({ people }) => {

    const [invitado,setInvitado] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [allow, setAllow] = useState(true);

    const handleSearch = ( e ) => {
        if( inputValue !== ''){
            if(inputValue.length > 1) {
                console.log(people)
                let finded = people.filter(invitado => invitado.nombreCompleto.includes(inputValue.toLowerCase()))
               
                if(finded.length === 0) {
                    setAllow(false)
                }else if( finded.length>0){
                    setAllow(true)
                    setInvitado(finded)
                }
            }
        }
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        if(inputValue.length<3){
            setInvitado([])
        }
        handleSearch()
    }

    return (
        <>
        
            <button type="button" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#confirmedModal">Confirmar</button> 

            <div className="modal fade" id="confirmedModal" tabIndex="-1" aria-labelledby="confirmedModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmedModalLabel">Confirma tú asistencia</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label input-width d-flex justify-content-start">Busca por tú nombre</label>
                                    <div className='d-flex'>
                                    <input placeholder='Escribe tu nombre' type="text" className="form-control search" id="recipient-name" value={inputValue} onChange={handleInputChange}/>
                                    <span onClick={(e) => handleSearch(e)} className='btn-icon' >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg></span>
                                    </div>
                                </div>
                                { !allow ?
                                    <h2> Lo sentimos no haces parte de nuestra lista de invitados!</h2>:
                                    <div className="mb-3">
                                    {
                                        invitado.map( (persona) => 
                                            <Card key={persona.id} person={persona}/>
                                        )
                                    }
                                </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}