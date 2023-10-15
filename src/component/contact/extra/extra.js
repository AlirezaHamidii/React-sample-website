import './extra.css'
import { FaVolleyballBall } from 'react-icons/fa'
import { IoMdFootball } from 'react-icons/io'
import { BiSolidBasketball } from 'react-icons/bi'
import { GiRaceCar } from 'react-icons/gi'
import DetailLine from './detailsLine'
import { Fragment } from 'react'

export default function Extra() {
    const paragraph = [
        { id: 1, icon: <FaVolleyballBall />, title: 'Volleyball', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .' },
        { id: 2, icon: <IoMdFootball />, title: 'Football', detail: 'Sed do eiusmod tempor incididunt ut labore et dolore .' },
        { id: 3, icon: <BiSolidBasketball />, title: 'Basketball', detail: 'Justo eget magna fermentum iaculis.' },
        { id: 4, icon: <GiRaceCar />, title: 'Formula1', detail: 'Velit aliquet sagittis id consectetur purus' }
    ]
    return (
        <div className='extra-container'>
            <div className=''>
                <DetailLine {...paragraph[0]} />
                <DetailLine {...paragraph[1]} />
                <DetailLine {...paragraph[2]} />
                <DetailLine {...paragraph[3]} />

            </div>
            <img className='extraImg' src="image/extra/1.jpg" alt="" />
        </div>
    )
}