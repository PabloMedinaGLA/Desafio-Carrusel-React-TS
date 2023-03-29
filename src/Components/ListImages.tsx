import React from 'react';
import style from './ListImages.module.css';
import axios from 'axios';
import { getCarrusel } from './utilidades';
import { InterfaceImages } from '../interfaces/Images';


export interface ListImagesProps {
    imageCarrusel:InterfaceImages[]
    setImageCarrusel:(value:InterfaceImages[]) => void
}


function ListImages({ imageCarrusel, setImageCarrusel }:ListImagesProps) {

    async function kickElement(cat:InterfaceImages) {
        await axios.delete(`http://localhost:3000/carrusel/${cat.id}`)
        const respuesta = await getCarrusel()
        setImageCarrusel(respuesta)
    }

    return (
        <div>
            <h1>Mi Carrusel</h1>
            <ul className={style.containerImages}>
                {
                    imageCarrusel.map((element) => {
                        return (
                            <li className={style.containerImagesElements} key={element.id} onClick={() => kickElement(element)}>
                                <div className={style.hoverElement}>
                                    <p>x</p>
                                </div>
                                <img src={element.url} alt='imagen gato' />
                            </li>

                        )
                    })
                }

            </ul>
        </div>
    )
}

export default ListImages;