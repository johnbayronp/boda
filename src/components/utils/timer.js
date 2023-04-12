import React,{useState}from 'react';
import { ContadorBox } from './contadorSquare';

export const Timer = ({fecha}) => {
    const [days,setDays] = useState('00')
    const [hour, setHour] = useState('00')
    const [minutes, setMinutes] = useState('00')
    
    setInterval(()=>{
        const countDown = new Date(fecha).getTime()
        const now = new Date().getTime()
        const distance = countDown - now

        setDays(Math.floor(distance/(1000 * 60 * 60 *24)))
        setHour(Math.floor((distance % (1000 * 60 *60 *24))/(1000*60*60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

    },1000)
  
    return (
    <>
        <ContadorBox dia = {days} hora ={hour} minutos = {minutes} />
    </>
  );
};

