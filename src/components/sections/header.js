
import React, { useEffect } from 'react'
import './header.css'
import song from '../../sound/play_boda.ogg' 

export const Header = ({bodaName, date }) => {
  useEffect(()=>{
    const sound = document.getElementById('sound');
    const touch = document.getElementById('touch');
    touch.addEventListener('click',(e)=>{
      touch.classList.add('remove')
      touch.classList.remove('audio-voice')
      setTimeout(()=>{
      touch.classList.remove('remove')
      touch.classList.add('oculta')
    },300)
      sound.play()
    })
  })
  return (
    <div className='header-title-novios'> 
        <div className='header-title'>
            <span className='subtitle-boda mb-4'> NUESTRA BODA</span>
             <h1 className='title-boda'> { bodaName } </h1> 
             <span className='subtitle-boda'> {date}</span><br/>
             <audio  id='sound' src={song} type='audio/ogg'>
             </audio>
        </div>
        
        <span id="touch" className='audio-voice'> Escucha aquí <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-cassette-fill" viewBox="0 0 16 16">
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h.191l1.862-3.724A.5.5 0 0 1 4 10h8a.5.5 0 0 1 .447.276L14.31 14h.191a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13ZM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z"/>
  <path d="m13.191 14-1.5-3H4.309l-1.5 3h10.382Z"/>
</svg></span>
    </div>
  )
}