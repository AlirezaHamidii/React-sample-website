import './contact.css'
export default function Contact(){
    return(
        <div className='contact-container'>
            <div className='form'>
                <input className='form-name' type="text" placeholder='name . . . ' />
                <input className='form-email' type="email" placeholder='email . . . ' />
                <input className='form-title' type="text" placeholder='title  . . . ' />
                <textarea className='text-area' type="text" placeholder='title  . . . ' />
                <button>SEND MESSAGE</button>
            </div>
        </div>
    )
}