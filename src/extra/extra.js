import './extra.css'
import DetailLine from './detailsLine'

export default function Extra(){
    const paragraph = [
        { id: 1, title: 'Volleyball', detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit .'},
        { id: 1, title: 'Football', detail:'Sed do eiusmod tempor incididunt ut labore et dolore .'},
        { id: 1, title: 'Basketball', detail:'Justo eget magna fermentum iaculis.'},
        { id: 1, title: 'Formula1', detail:'Velit aliquet sagittis id consectetur purus'}
    ]
    return(
        <div className='extra-container'>
            <div className=''>
                    <DetailLine {...paragraph[0]}/>
                    <DetailLine {...paragraph[1]}/>
                    <DetailLine {...paragraph[2]}/>
                    <DetailLine {...paragraph[3]}/>
            </div>
            <img className='extraImg' src="image/extra/1.jpg" alt="" />
        </div>
    )
}