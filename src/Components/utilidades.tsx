import axios from "axios";

export async function getCarrusel() {
    return (await axios.get("http://localhost:3000/carrusel")).data;
}

export async function getGaleria() {
    return (await axios.get("http://localhost:3000/galeria")).data;
}