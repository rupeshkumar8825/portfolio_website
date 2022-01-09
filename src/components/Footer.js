// this is the footer component of the website 
import React from 'react';
import "../css/footer.css";


// defining the functional component of the footer 
const Footer = () => {
    console.log("right now at the footer component of the website ");

    return (
        <>
            <div className="footer">
                {/* <div className="footer-icons">
                    <p className="icons">
                        <img src={instagram} alt="" />
                    </p>
                    <p className="icons">
                        <img src={facebook} alt="" />
                    </p>
                    <p className="icons">
                        <img src={linkedin} alt="" />
                    </p>
                    <p className="icons">
                        <img src={github} alt="" />
                    </p>
                </div> */}
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

