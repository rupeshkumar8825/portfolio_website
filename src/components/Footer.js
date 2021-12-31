// this is the footer component of the website 
import React from 'react';
import "../css/footer.css";

// defining the functional component of the footer 
const Footer = () => {
    console.log("right now at the footer component of the website ");

    return (
        <>
            <div className="footer">
                <div className="footer-icons">
                    <p className="icons">Tw</p>
                    <p className="icons">In</p>
                    <p className="icons">Li</p>
                    <p className="icons">Fa</p>
                    <p className="icons">Int</p>
                </div>
                <div className="footer-content">
                    <p>@RKCompany.All Rights Reserved</p>
                    <h3>Created by RKCompany</h3>
                </div>
            </div>
        </>
    )

}

// say everything went fine 
export default Footer;

