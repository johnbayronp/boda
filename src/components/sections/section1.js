import React from 'react'
import './section.css'
import foto1 from '../../img/foto1.jpeg'

export const Section1 = ({ bodaName, date }) => {
    return (
        <div className='section-container bioWedding'>
            <div className='container'>
                <div className="row justify-content-center resize-column">

                    <div className="col-4 d-flex justify-content-end">
                        <img src={foto1} alt="foto-1" className='photo-bio' />
                    </div>

                    <div className="col ">
                        <h1 className='title-bio'> Nuestra historia de amor</h1>
                        <p className='body-bio'>
                        Y quien creia que los designios de Dios era unir nuestras vidas, todo lo estaba orquestando en su Corazon incluso antes de que llegaramos a esta tierra  y su amor ya hace más de una año a dado un vuelco en nuestros Corazones.
                        <br></br>
                        Por lo cual hemos decidido  unirnos en amor, obediencia y Fe. En el Pacto del Matrimonio por que así a hablando nuestro Dios. 
                        <br></br><br></br>
                        GENESIS 2:23- ¡ella es huesos de mis huesos y carne de mi carne! Y ella será llamada mujer por que fue tomada del hombre!
                        <br></br><br></br>
                        Es así como deseamos celebrar esta unión con ustedes. 
                        Esperamos contar contigo. 
                        <br></br>
                        Los niños en casa y los papitos disfrutando.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}