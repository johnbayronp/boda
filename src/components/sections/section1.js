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
                        <h1 className='title-bio'> ¡Nuestra historia de amor!</h1>
                        <p className='body-bio'>
                            Nació en el corazón de Dios que todo lo ha hecho hermoso en su tiempo y quiso que nuestras vidas se juntaran, estamos felices de entrar en pacto con Dios y vivir juntos una nueva aventura. Deseamos celebrar y compartir contigo la alegría de unir nuestras vidas en matrimonio.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}