import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
import { Header,Section1,Section2,Section3,Section4,SectionConfirmed,Message,Footer} from '../components/sections';
import { auth } from '../infrastructure/api';


export const Home = ({nombres, fecha}) => {
    
  const dateString = moment(fecha,"MM-DD-YYYY").format('LL').toUpperCase();

  console.log(auth)
  return (
    <>
     <Header bodaName={nombres} date={dateString}/>   
     <Section1 /> 
     <Section2 />
     <Section3 />
     <Section4/>
     <Message /> 
     <SectionConfirmed/>
     <Footer/>
    </> 
  )
}
