import React from 'react'
import './Streamer.css'

export const Streamer = () => {
    
    return (
        <>  
        <h1 className='title-bg-2'> Boda en Vivo </h1>
        <div className="container">
            <div className="ratio ratio-16x9">
                <iframe title='Boda En Vivo'className="embed-responsive-item" src="https://www.youtube.com/embed/Ea0LE06a-YY" allowfullscreen></iframe>
            </div>
        </div>
        </>

    )
}