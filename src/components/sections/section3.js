import React from 'react'
import './section.css'
import image1 from '../../img/foto1.jpeg'
import image2 from '../../img/foto6.jpeg'
import image3 from '../../img/foto11.jpeg'
import image4 from '../../img/foto8.jpeg'
import {GalleryComponent} from '../sections'

export const Section3 = () => {
    return (<>
        <div className='d-flex section-img-container-back'>
            <div className='gallery-header-title'>
                    <h1 className='title-bg color-secound'> Galería </h1>
                    <div
                        id="carouselExampleDark"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active"
                                aria-label="Slide 1"
                                aria-current="true"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                className=""
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                className=""
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                                className=""
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img src={image1} alt="foto-x1" className='photo-gallery' />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={image2} alt="foto-x2" className='photo-gallery' />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={image3} alt="foto-x2" className='photo-gallery' />
                            </div>
                            <div className="carousel-item">
                                <img src={image4} alt="foto-x3" data-bs-interval="500" className='photo-gallery' />
                            </div>
                        </div>
                    </div>
            </div>
              
        </div>
        
        <GalleryComponent/>  
        </>


    )
}