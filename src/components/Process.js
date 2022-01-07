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
                    <div className="step-container">
                        <div className="step-number">
                            1
                        </div>
                        <div className="step-content">
                            <h1>Get in Touch With us</h1>
                            <p>Fill the contact form to get in touch with us. Provide little description about the project in the project section in contact form. We will get back to you soon.</p>

                        </div>
                    </div>

                    <div className="step-container">
                        <div className="step-number">
                            2
                        </div>
                        <div className="step-content">
                            <h1>Discuss your requirements</h1>
                            <p>The first step is to get in touch with us and then we will proceed further in this</p>

                        </div>
                    </div>

                    <div className="step-container">
                        <div className="step-number">
                            3
                        </div>
                        <div className="step-content">
                            <h1>Finalise the business deal</h1>
                            <p>The first step is to get in touch with us and then we will proceed further in this</p>

                        </div>
                    </div>
                    <div className="step-container">
                        <div className="step-number">
                            4
                        </div>
                        <div className="step-content">
                            <h1>Starts working on the project   </h1>
                            <p>The first step is to get in touch with us and then we will proceed further in this</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


// say everything went fine 
export default Process;