import './extra.css'

export default function DetailLine({icon, title , detail}){
    return(
        <div className='container'>
            <i>{icon}</i>
            <div className='text'>
                <h2>{title}</h2>
                <p>{detail}</p>
            </div>
        </div>
    )
}