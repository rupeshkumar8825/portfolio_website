// this is the contact form for the users to contact to the owner 
import React from 'react';
import "../css/Contact.css";

// defining the functional component of the contac web page for this purpose 
const Contact = () => {

    return (
        <>
            <h1 id="contact-heading">Contact Me</h1>
            <div className="contact-container">
                {/* adding my own details in this section  */}
                <div className="personal-details">
                    <div className="phone-details">
                        <h2>Phone-Number</h2>
                        <p>8825220213</p>
                    </div>
                    <div className="email-details">
                        <h2>Email-id</h2>
                        <p>rk763130@gmail.com</p>
                    </div>
                    <div className="address-details">
                        <h2>Address</h2>
                        <p>Lalapur, kudra</p>
                        <p>District = Kaimur, Bihar, Near Gayatri Studio</p>
                    </div>
                </div>
                {/* now adding section for the user to send message if he/she wants to talk or send some of the query  */}
                <div className="contact-form">
                    <form action="">
                        <div className="formpart1">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='PhoneNumber' />


                        </div>
                        <textarea name="query" id="query" cols="30" rows="10" placeholder='Tell me your query'></textarea>
                    </form>
                    <button type="submit">Send Message</button>
                </div>
            </div>
        </>
    )
}


// say everything went fine 
export default Contact;
