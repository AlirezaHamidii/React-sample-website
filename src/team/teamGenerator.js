import './team.css'
export default function TeamGenerator({image , title , detail}){
    return(
        <div className='team-generator'>
            <img className='teamimage' src={image} alt="" />
            <h2>{title}</h2>
            <p>{detail}</p>
        </div>
    )
}
