import './headerBoxes.css'
export default function Boxes({ icone , title , date}){
    return(
            <div className="box-container">
                <div className="box">
                    <h1 className='box-icones'><i className= {icone} ></i></h1>
                    <h2>{title}</h2>    
                    <h5>{date}</h5>
                </div>
            </div>
    )
}