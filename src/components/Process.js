// this is the process component to tell the client how to start working together
// defining the functional component for this purpose 
import React from 'react';
import "../css/Process.css"
const Process = () => {
    return (
        <>
            <div className="process">
                <h1 className="process-heading">
                    Ours Journey
                </h1>
                <div className="process-container">
                    {/* designing the each container using the html  */}
                    <div className="step-container" id='step1'>
                        <h2>1</h2>
                        {/* <div className="step-content"> */}
                        <h1>Get in Touch</h1>
                        <p>Fill the contact form to get in touch with us. Provide little description about the project in contact form. We will get back to you soon.</p>

                        {/* </div> */}
                    </div>

                    <div className="step-container" id='step2'>
                        {/* <div className="step-number"> */}
                        <h2>2</h2>
                        {/* </div> */}
                        {/* <div className="step-content"> */}
                        <h1>Talk to us</h1>
                        <p>Discuss with the clients requirements and understand their need what they actually need. We work closely with the clients.</p>

                        {/* </div> */}
                    </div>

                    <div className="step-container" id='step3'>
                        {/* <div className="step-number"> */}
                        <h2>3</h2>
                        {/* </div> */}
                        {/* <div className="step-content"> */}
                        <h1>Finalise the deal</h1>
                        <p>We finalise the business deal with the client at fixed price and fixed deadline depending of the kind of project.</p>

                        {/* </div> */}
                    </div>
                    <div className="step-container" id='step4'>
                        {/* <div className="step-number"> */}
                        <h2>4</h2>
                        {/* </div> */}
                        {/* <div className="step-content"> */}
                        <h1>Get started</h1>
                        <p>Finally ready to start working on the client's projects with full pace. We make sure that we fulfill each and every requirements of the client.</p>

                        {/* </div> */}
                    </div>

                </div>

            </div>
        </>
    )
}


// say everything went fine 
export default Process;