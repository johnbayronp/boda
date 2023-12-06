import React from 'react';
import {Gallery} from 'react-grid-gallery';
import foto1 from '../../img/foto1.jpeg' 
import foto2 from '../../img/foto2.jpeg'
import foto3 from '../../img/foto3.jpeg'
import foto4 from '../../img/foto4.jpeg'
import foto5 from '../../img/foto5.jpeg'
import foto7 from '../../img/foto7.jpeg'
import foto8 from '../../img/foto8.jpeg'
import foto9 from '../../img/foto9.jpeg'
import foto10 from '../../img/foto10.jpeg'
import foto11 from '../../img/foto11.jpeg'
import foto12 from '../../img/foto12.jpeg'
import foto13 from '../../img/foto13.jpeg'
const images = [
{original:'Boda Victor & Daniela',
    src: foto1,
    width: 1066,
    height: 1600
 },{original:'Boda Victor & Daniela 2',
    src: foto2,
    width: 1600,
    height: 1066
 },{original:'Boda Victor & Daniela 3',
    src: foto3,
    width: 1600,
    height: 1066
 },{original:'Boda Victor & Daniela 4',
    src: foto4,
    width: 800,
    height: 1066
 },{original:'Boda Victor & Daniela 5',
   src: foto5,
   width: 1000,
   height: 1066
},
{original:'Boda Victor & Daniela 7',
   src: foto7,
   width: 800,
   height: 1066
},{original:'Boda Victor & Daniela 8',
   src: foto8,
   width: 800,
   height: 1066
},{
   original:'Boda Victor & Daniela 9',
   src: foto9,
   width: 800,
   height: 1066
},{
   original:'Boda Victor & Daniela 10',
   src: foto10,
   width: 800,
   height: 1066
},{
   original:'Boda Victor & Daniela 11',
   src: foto11,
   width: 800,
   height: 1066
},{
   original:'Boda Victor & Daniela 12',
   src: foto12,
   width: 1400,
   height: 1066
},{
   original:'Boda Victor & Daniela 13',
   src: foto13,
   width: 800,
   height: 1066
}
];

export const GalleryComponent = () => {
  return (<>
        <div className='gallery-box'>
            <Gallery 
               images={images} 
               rowHeight={400}
               enableImageSelection={false}
            />
        </div>
    </>
  );
};
