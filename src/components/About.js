// this is the about section of the portfolio website 
import React from 'react';
import "../css/About.css";
import aboutmepic3 from "../components/aboutmepic3-edited.png";
// defining the component of the about page 
const About = () => {
    console.log("this is the about page component");

    return (
        <>
            <div className="about-container">
                <h1>About me</h1>
                <div className="about-content">
                    <img src={aboutmepic3} alt="My Pic" />
                    <div className="main-content">
                        <p>
                            <span id='about-tagline'>Web developer and designer.</span>
                            <span id='about-intro'>Hi, I am Rupesh Kumar specialised in creating beautiful dynamic and static websites from scratch and with latest trends.</span>

                            <span id='about-detailed-intro'>I build dynamic and static websites for youtubers, startups and small business with experience of around 1 year in the field of web development. I make sure that i provide my best services to my clients for their benefit. I optimitse the websites to rank better on the google using the SEO techniques. Always look forward to take ideas and learn from the past experiences. I have worked on few good projects which you can see in the work section.</span>
                            <span id="about-detailed-intro">
                                I am familiar with frontend (HTML, CSS, JS, ReactJS), backend(JS, NodeJS, ExpressJS) and MongoDB database. Still learning new technologies as per the current trend.
                            </span></p>
                        {/* adding the button for the resume. The link to the resume will be provided  */}
                        <a href="https://drive.google.com/file/d/1Gf-gvTbZGLDRY7-4ZWTaDopNknKahi-Q/view"><button className="resume-button">Resume</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

// say everything went fine 
export default About;