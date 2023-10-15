import './slider.css'
export default function Slider({image}){
    return(
        <div>
            <img className='slider-img' src={image} />
        </div>
    )
}