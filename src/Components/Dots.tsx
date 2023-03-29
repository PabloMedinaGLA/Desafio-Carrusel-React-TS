import React from 'react';
import { InterfaceImages } from '../interfaces/Images';
import { InterfaceSlider } from '../interfaces/Slider';

interface InterfacesDots {
    activeIndex: number
    imageSlider: InterfaceImages[]

    setActiveIndex:React.Dispatch<React.SetStateAction<number>>
}

function Dots({activeIndex, setActiveIndex, imageSlider}:InterfacesDots) {

    return <div className='all-dots'>
        {imageSlider.map((slide,index) => (
            <span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                onClick={()=>setActiveIndex(index)}
            ></span>
        ))}
    </div>
}

export default Dots;