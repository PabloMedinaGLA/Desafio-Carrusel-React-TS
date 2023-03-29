import React, { useState, useEffect, SetStateAction } from 'react';
import { getCarrusel, getGaleria } from './utilidades';
import './Gallery.css'
import axios from 'axios';
import { InterfaceImages } from '../interfaces/Images';
import { Link } from 'react-router-dom';
import ListImages from './ListImages';
import AgregarImagen from './AgregarImagen';

interface GalleryProps {
    imageCarrusel: InterfaceImages[]
    setImageCarrusel: React.Dispatch<SetStateAction<InterfaceImages[]>>
}

function Gallery({ imageCarrusel, setImageCarrusel }: GalleryProps) {

    const [elements, setElements] = useState<InterfaceImages[]>([]);
    const [modal, setModal] = useState<boolean>(false);

    const initElement = () => {
        getGaleria().then((res) => {
            setElements(filterElements(res.reverse()));
        })
    }
    useEffect(() => { //Se llama al montarse el componente
        initElement();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function MoveElement(cat: InterfaceImages) {
        if (imageCarrusel.length < 6) {
            await axios.post("http://localhost:3000/carrusel", cat)
            const respuesta = await getCarrusel()
            setImageCarrusel(respuesta)
        } else {
            alert("Solo Puede agregar 6 Imagenes al carrusel")
        }
    }

    function filterElements(element: InterfaceImages[]) {
        return element.filter(function (item) {

            for (const e of imageCarrusel) {
                if (item.id === e.id)
                    return false;
            }

            return true

        })
    }

    return (
        <div>
            <div className='container-header'>
                <Link className='button-header' to='/'>Carrusel</Link>
                <button className='button-galeria' onClick={() => setModal(!modal)}>Agregar</button>
            </div>
            <ListImages imageCarrusel={imageCarrusel} setImageCarrusel={setImageCarrusel} />
            <AgregarImagen estado={modal} setEstado={setModal} setElements={setElements} />
            <h2>Galeria</h2>
            <ul className='container-images'>
                {
                    filterElements(elements).map((element) => {
                        return (
                            <li className='container-images-elements' onClick={() => MoveElement(element)} key={element.id}>
                                <div className='hover-element'>
                                    <p>+</p>
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

export default Gallery;