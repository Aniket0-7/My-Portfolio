import "./Contact.css";
import call from "../../img/call.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () =>{

    const formref = useRef()
    const[done,setdone]=useState(false);


    const handelSumbit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_zksz3ur', 'template_5jymga7', formref.current, 'Cnhg6jqe7tY-n09dS')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    
     

    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={call} alt=""  className="c-icon"/>
                            +91 8144434917
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt=""  className="c-icon"/>
                            aniker207@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt=""  className="c-icon"/>
                            Sambalpur , Odisha
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formref}  onSubmit={handelSumbit} >
                        <input type="text" placeholder="Name" name="user_name"  />
                        <input type="text" placeholder="Subject" name="user_subject"  />
                        <input type="text" placeholder="Email" name="user_email"  />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact;