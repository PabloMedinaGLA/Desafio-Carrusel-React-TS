import React, { useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from "./SliderContent";
import './Slider.css';
import { InterfaceSlider } from '../interfaces/Slider';
import { Link } from 'react-router-dom';

function Slider({ imageCarrusel }: InterfaceSlider) {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    if (!imageCarrusel.length) {
        return (
            <div className='slider-container'>
                <h1 id='no-found'>No imagenes registradas</h1>
                <Arrows
                    prevSlide={() => { }}
                    nextSlide={() => { }} />
            </div>
        )
    }

    return (
        <main>

            <div className='slider-container'>
                <SliderContent activeIndex={activeIndex} imageSlider={imageCarrusel} />
                <Arrows
                    prevSlide={() => setActiveIndex(activeIndex > 1 ? activeIndex - 1 : imageCarrusel?.length - 1)}

                    nextSlide={() => setActiveIndex(activeIndex === imageCarrusel?.length - 1 ? 0 : activeIndex + 1)}
                />
                <Dots activeIndex={activeIndex} imageSlider={imageCarrusel} setActiveIndex={setActiveIndex} />
            </div>

            <div className='container-button'>
              <Link className='button-home' to='/galeria'> Ir a Galeria </Link>
            </div>
        </main>

    )
}

export default Slider;