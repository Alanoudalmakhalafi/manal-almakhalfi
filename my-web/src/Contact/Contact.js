import './Contact.css'
import React, { useState  } from 'react';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { GrMail } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from 'react-icons/bs';


const Contact = () =>  {

    const form = useRef();

    const [done , setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r9scnfg', 'template_6dxzozk', form.current, 'EqwVFTW9PjuXYrXcf')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    };
  
  return (
    <div className='Contact-form' id='Contact' >
        

         <div className='c-left'>
    
         <div className='ala'>
         <div className="headerProfile-menu-list" onClick={() => window.open("Almakhlafimanal@gmail.com")}>
            <i className="mdi mdi-help-circle"></i> <a href='Almakhlafimanal@gmail.com'> <GrMail/> </a> </div>
          
          {/* <br></br> */}
          <a href='http://www.linkedin.com/in/manalalmakhlafi'> <GrLinkedinOption/> </a> 
        </div>
            
        </div>
        

        <div className='c-right' >
            {/* <form ref={form} onSubmit={sendEmail} className='Form' >
                <input type="text" name='user_name' className='user' placeholder='name'/>
                <input type="email" name='user_email' className='user' placeholder='email'/>
                <textarea name='message' className='user' placeholder='message'/>
                <input type='submit' value='send' className='button' />

              
                <span>{done && alert("Thank for contacting me ")}</span>
                <div className='blur' ></div>
               

            </form> */}
        </div> 






    </div>
  )
}

export default Contact