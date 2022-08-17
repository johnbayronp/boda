
import React from 'react'
import './header.css'

export const Header = ({bodaName, date}) => {
  return (
    <div className='header-title-novios'> 
        <div className='header-title'>
            <span className='subtitle-boda mb-4'> NUESTRA BODA</span>
             <h1 className='title-boda'> { bodaName } </h1> 
             <span className='subtitle-boda'> {date}</span>
        </div>
    </div>
  )
}