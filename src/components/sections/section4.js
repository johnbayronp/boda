import React from 'react'
import './section4.css'

export const Section4 = ({participativa}) => {
    
    return (
        <>  
        
            <div className='section-bg'>
            <div className="row d-flex justify-content-center mar-custom">
                
           {/*  <h1 className='title-bg-2'>Agradecemos tú compañia, Desde lejos pero cerca!</h1> */}
           {!participativa ? <div className="col-sm-4 mb-4">
                        
                        <h1 className='title-bg-2'> Lugar </h1>
                        <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Ceremonia 4PM</h5>
                            <p className="card-text muted">La primavera - Km 2 Via Sirivana, Yopal, Casanare</p>
                            <a href="https://goo.gl/maps/A3y2fRdU4bJZXopt7" className="btn btn-success d-flex justify-content-center">Como llegar</a>
                        </div>
                        </div>
                    </div> : null}
                <h1 className='title-bg-2 mt-4'> Lluvia de sobres </h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-envelope color mb-3" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>  {/* 
                <hr className='division'/> 
                <div className="col-sm-4">
                    <div className="card morado-card">
                            <div className="card-body">
                                
                            <h5 className="card-title center-qr morado">Donaciones QR Nequi</h5>
                            
                                <img src={qr} alt="qr-nequi" className='qr'/>
                                <h5 className="card-title center-qr morado">318 482 68 45</h5>
                            </div>
                    </div>
                </div>
            */}
                   
                    {/*<div className="col-sm-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Boda en vivo Ceremonia 3PM</h5>
                            <p className="card-text muted">Streaming video</p><br/>
                            <a href="https://www.youtube.com/watch?v=Ea0LE06a-YY&ab_channel=JohnPerez" className="btn btn-success d-flex justify-content-center">Ver en vivo</a>
                        </div>
                        </div>
                    </div>*/}
            </div>
            </div>
        </>

    )
}