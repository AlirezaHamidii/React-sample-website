import './navbar.css'
export default function Navbar(){
    return(
        <div>
            <div className='navbar'>
                <h1>ALIREZA</h1>
                <ul className='menu'>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">TEAM</a></li>
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