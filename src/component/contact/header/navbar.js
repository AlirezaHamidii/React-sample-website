import './navbar.css'
import { AiFillHome } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { LiaInfoSolid } from 'react-icons/lia'
import { MdPermContactCalendar } from 'react-icons/md'
import { AiOutlineTeam } from 'react-icons/ai'

export default function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <h1>ALIREZA</h1>
                <ul className='menu'>
                    <li><a href="#"><AiFillHome /> HOME</a></li>
                    <li><a href="#"><RiServiceLine /> SERVICES</a></li>
                    <li><a href="#"><LiaInfoSolid /> ABOUT</a></li>
                    <li><a href="#"><MdPermContactCalendar /> CONTACT</a></li>
                    <li><a href="#"><AiOutlineTeam /> TEAM</a></li>
                </ul>
                <ul>
                    <li className='start-button'>START</li>
                </ul>
            </div>
            <div className=''>
                <p className='title'>Strong Digital Solution</p>
                <p className='detail1'>Yesterday is history</p>
            </div>
        </div>
    )
}