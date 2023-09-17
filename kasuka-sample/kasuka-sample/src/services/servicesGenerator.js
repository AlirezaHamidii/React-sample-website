import './services.css'
export default function ServicesGenerator({icon , title , paragraph}){
    return(
        <div className='services-container'>
            <i className={icon}></i>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}