import { useEffect, useState } from 'react';
import axios from 'axios';

// https:\/\/purr.objects-us-east-1.dream.io\/i\/Uf7by.jpg

interface cat {
    img: string
}

interface AppState {
    cats: Array<cat>
}

function ImagesCats() {
    const [cats, setListCat] = useState<AppState["cats"]>([]);

    useEffect(() => {
        const getCats = async () => {
            const url = 'http://localhost:3000/images';
            const result = await axios.get(url);

            setListCat(result.data)
        }

        getCats();
    }, [])

    

    return  (
        <div>
            <h1>Imagenes de Gatos</h1>
            <div>
                <ul className='carrousel_container'>
                    {cats.length === 0 && <p>Cargando...</p>}
                    {
                        cats.map((cat, i) => {


                            return i <6?(
                                <li key={i}>

                                    <img src={cat.img} alt="imagen gato" width='400' />

                                </li>

                            ) : null
                        }) 
                    }
                </ul>

            </div>
        </div>

    )
}

export default ImagesCats;