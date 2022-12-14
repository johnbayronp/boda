import React from 'react'
import './section4.css'

export const Section4 = () => {
    return (
        <>  
        
            <div className='section-bg'>
            <div className="row d-flex justify-content-center mar-custom">
                    
                <h1 className='title-bg-2'> Lluvia de sobres </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-envelope color mb-3" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <hr className='division'/> 
                    <div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ceremonia 3PM</h5>
                            <p className="card-text muted">Sabana Eventos - Km 7 Via Sirivana, Yopal, Casanare</p>
                            <a href="https://goo.gl/maps/J5pTUkb6RJUGByHn7" className="btn btn-success d-flex justify-content-center">Como llegar</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Boda en vivo</h5>
                            <p className="card-text muted">Streaming video</p><br/>
                            <a href="https://www.youtube.com/watch?v=Ea0LE06a-YY&ab_channel=JohnPerez" className="btn btn-success d-flex justify-content-center">Ver en vivo</a>
                        </div>
                        </div>
                    </div>
            </div>
            </div>
        </>

    )
}