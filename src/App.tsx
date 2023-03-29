import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css'
import HeaderConDropdown from './Components/Header';
import { StyleSystemProvider, Footer } from '@architecture-it/stylesystem';
import Slider from './Components/Slider';
import Gallery from './Components/Gallery';
import { getCarrusel } from './Components/utilidades';
import { InterfaceImages } from './interfaces/Images';


function App() {
  const [imageCarrusel, setImageCarrusel] = useState<InterfaceImages[] | Array<InterfaceImages>>([]); //OK -> [cats, setCats] 

  const initImages = () => {
    getCarrusel().then((res) => {
      setImageCarrusel(res);
    })
  }

  useEffect(() => { //Se llama al montarse el componente
    initImages();
  }, [])




  return (
    <StyleSystemProvider>
      <HeaderConDropdown />
      <Routes>
        <Route path='/' element={
          <Slider imageCarrusel={imageCarrusel} />
        }/>
        

        <Route path='/galeria' element={
          <Gallery imageCarrusel={imageCarrusel} setImageCarrusel={setImageCarrusel} />
        }/>
      </Routes>
      <Footer />

    </StyleSystemProvider>

  )
}

export default App
