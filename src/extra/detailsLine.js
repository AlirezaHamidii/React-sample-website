import './extra.css'
export default function DetailLine({title , detail}){
    return(
        <div className='container'>
            <i className='fa fa-soccer-ball-o'></i>
            <div className='text'>
                <h2>{title}</h2>
                <p>{detail}</p>
            </div>
        </div>
    )
}