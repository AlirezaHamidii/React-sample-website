import Slider from './slider'
import './slider.css'
export default function SliderContainer() {
    const Allslider = [
        { image: 'image/slider/client-1.png' },
        { image: 'image/slider/client-2.png' },
        { image: 'image/slider/client-4.png' },
        { image: 'image/slider/client-6.png' },
        { image: 'image/slider/client-8.png' },
        { image: 'image/slider/client-1.png' },
        { image: 'image/slider/client-4.png' },
    ]
    return (
        <div className="slider">
            <Slider {...Allslider[0]} />
            <Slider {...Allslider[1]} />
            <Slider {...Allslider[2]} />
            <Slider {...Allslider[3]} />
            <Slider {...Allslider[4]} />
            <Slider {...Allslider[5]} />
            <Slider {...Allslider[6]} />
        </div>
    )
}