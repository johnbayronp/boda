import React from 'react'
import './header.css'
import {Timer} from '../utils'

export const Section2 = () => {
    return (
        <div className='d-flex section-container-back'> 
            <div className='header-title'>
                 <h1 className='title-bg'> Faltan </h1> 
                 <Timer fecha={'Apr 30, 2023 16:00:00'}/>
            </div>
        </div>

    )
}