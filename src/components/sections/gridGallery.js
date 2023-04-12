import React from 'react';
import {Gallery} from 'react-grid-gallery';
import foto1 from '../../img/foto1.jpeg' 
import foto2 from '../../img/foto2.jpeg'
import foto3 from '../../img/foto3.jpeg'
import foto4 from '../../img/foto4.jpeg'
import foto5 from '../../img/foto5.jpeg'
const images = [
{original:'Boda Luis & Nancy 1',
    src: foto1,
    width: 1066,
    height: 1600
 },{original:'Boda Luis & Nancy 2',
    src: foto2,
    width: 1600,
    height: 1066
 },{original:'Boda Luis & Nancy 3',
    src: foto3,
    width: 1600,
    height: 1066
 },{original:'Boda Luis & Nancy 4',
    src: foto4,
    width: 1600,
    height: 1066
 },{original:'Boda Luis & Nancy 5',
   src: foto5,
   width: 1600,
   height: 1066
}
];

export const GalleryComponent = () => {
  return (<>
        <div className='gallery-box'>
            <Gallery 
               images={images} 
               enableImageSelection={false}
            />
        </div>
    </>
  );
};
