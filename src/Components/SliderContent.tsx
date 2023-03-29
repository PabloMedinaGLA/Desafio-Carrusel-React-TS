import { InterfaceImages } from "../interfaces/Images";
import { InterfaceSlider } from "../interfaces/Slider";

interface SliderContentProps{
    activeIndex: number
    imageSlider: InterfaceImages[]
}

function SliderContent({ activeIndex, imageSlider }: SliderContentProps) {


    return (
        <section>
            {imageSlider.map((slide: InterfaceImages,index) =>
            (
                <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                    <img className='slide-image' src={slide.url} alt="imagen gato" />
                </div>
            )


            )}
        </section>
    )
}

export default SliderContent;