import './header.css'
import Navbar from './navbar'
import Boxes from './headerBoxes'

export default function Header(){
    const info = [
        { id: 1 ,icone:'fa fa-cloud' , title: 'CLOUD', date: 'November' },
        { id: 2 ,icone:'fa fa-user' , title: 'USER', date: 'April' },
        { id: 3 ,icone:'fa fa-list' ,title: 'LIST', date: 'December' },
        { id: 4 ,icone:'fa fa-check' ,title: 'CHECK', date: 'February' },
        { id: 5 ,icone:'fa fa-coffee' ,title: 'COFFEE', date: 'March' },
    ]
    return(
        <div className='header'>
            <Navbar></Navbar>
            <div className='boxes'>
                <Boxes {...info[0]}/>
                <Boxes {...info[1]}/>
                <Boxes {...info[2]}/>
                <Boxes {...info[3]}/>
                <Boxes {...info[4]}/>
            </div>
        </div>
    )
}