import "./Contact.css";
import call from "../../img/call.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useState } from "react";


const Contact = () => {

    const [user, setuser] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    let name, value;

    const getuserdata = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuser({ ...user, [name]: value })
    };

    const postdata = async (e) => {
        e.preventDefault();

        const { name, subject, email, message } = user;

        if ((name && subject && email && message)) {
            const res = await fetch("https://my-portfolio-6bfbc-default-rtdb.firebaseio.com/myportfoliodataform.json ",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    subject,
                    email,
                    message,
                })
            }

        );

        if (res) {
            setuser({
                name: "",
                subject: "",
                email: "",
                message: "",
            });
            alert("Your Response Submitted Sucessfully")
        }
        }else{

            alert("Please Fil all the data ")

        }

        

    };

    return (
        <div className="c" id="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={call} alt="" className="c-icon" />
                            +91 8144434917
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            aniker207@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Sambalpur , Odisha
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form method="POST" >
                        <input type="text"
                            value={user.name}
                            onChange={getuserdata}
                            placeholder="Name" name="name"
                            autoComplete="off"
                            required
                        />

                        <input type="text"
                            value={user.subject}
                            onChange={getuserdata}
                            placeholder="Subject" name="subject"
                            autoComplete="off"
                            required
                        />

                        <input type="text"
                            value={user.email}
                            onChange={getuserdata}
                            placeholder="Email" name="email"
                            autoComplete="off"
                            required
                        />

                        <textarea rows="5"
                            value={user.message}
                            onChange={getuserdata}
                            placeholder="Message" name="message"
                            autoComplete="off"
                            required
                        />

                        <button onClick={postdata} >Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact;