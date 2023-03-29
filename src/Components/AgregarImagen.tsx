import React,{SetStateAction, useState} from "react";
import axios from "axios";
import './AgregarImagen.css';
import { getGaleria } from './utilidades';
import { InterfaceImages } from "../interfaces/Images";

interface EstadoProps {
    estado: boolean
    setEstado:React.Dispatch<SetStateAction<boolean>>

    setElements: React.Dispatch<React.SetStateAction<InterfaceImages[]>>
}

const AgregarImagen = ({estado,setEstado,setElements}:EstadoProps) => {

    const [dato,setDato] = useState<InterfaceImages>({
        id: 0,
        url: ''
    });

    const handleInputChange = (event:any) => {
        const {value,name} = event.target
        setDato(prev => ({
            ...prev,
            id: Date.now(),
            [name] : value
        }))
    }
    const enviarDatos = async (event:any) => {
        event.preventDefault();
        if(await isImgUrl(dato.url) ){

            axios.post("http://localhost:3000/galeria",{
                ...dato
            })
            setEstado(!estado)
            const respuesta = await getGaleria()
            setElements(respuesta.reverse())

        }else{
            alert("No se puede Ingresar esta URL");
        }
    }

    async function isImgUrl(url:InterfaceImages["url"]) {
        return await fetch(url, {method: 'HEAD'}).then(res => {
          return res.headers.get('Content-Type')!.startsWith('image')
        })
      }

    return (
        <>
            {estado &&
            <div className="container">
                <form className="contenedor-form" onSubmit={enviarDatos}>
                    <button id="boton-cerrar" onClick={() => setEstado(!estado)}>X</button>
                    <label>Agregar Imagen</label>
                    <input 
                    id="POST-url" 
                    type="text" 
                    name="url" 
                    placeholder="Url" 
                    onChange={handleInputChange}
                    />
                    <button id="POST-submit" type="submit">Añadir</button>
                </form>
            </div>
            }
        </>
    );

}

export default AgregarImagen;