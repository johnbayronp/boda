import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { Header,Section1,Section2,Section3,Section4,Message,Footer} from '../components/sections';


export const Participativa = ({nombres, fecha}) => {
    
  const dateString = moment(fecha,"MM-DD-YYYY").format('LL').toUpperCase();

  return (
    <>
     <Header bodaName={nombres} date={dateString}/>   
     <Section1 /> 
     <Section2 />
     <Section3 />
     <Section4 participativa={true}/>
     <Message /> 
     <Footer/>
    </> 
  )
}
