import React from 'react'
import './section.css'
import foto1 from '../../img/FOTO1.jpg'

export const Section1 = ({ bodaName, date }) => {
    return (
        <div className='section-container'>
            <div className='container'>
                <div className="row justify-content-center resize-column">

                    <div className="col-4 d-flex justify-content-end">
                        <img src={foto1} alt="foto-1" className='photo-bio' />
                    </div>

                    <div className="col">
                        <h1 className='title-bio'> ¡Nos Casamos!</h1>
                        <p className='body-bio'>En esta historia que Dios ha escrito para nosotros, hemos vivido el poder de su amor, un amor grande y valioso que cada día se enciende más.
Es por esto que queremos hacer un pacto ante Dios para siempre y construir de su mano nuestro hogar. Lo que nos llena de gozo compartir este tiempo con ustedes.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}