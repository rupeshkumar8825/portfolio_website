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
                        <p><span id='about-tagline'>UI/UX Designer & Web Developer.
                            Based in Bihar. I'm Code & Design things for web.</span>
                            <span id='about-intro'>I am a professional web designer and developer from Bihar, India.</span>

                            <span id='about-detailed-intro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsum laboriosam quas labore autem nulla laudantium accusantium amet et. Odio consectetur ipsum, ab, non repellat illo mollitia asperiores obcaecati, alias harum ipsa quos nostrum molestias. Non et eius fugit quo vero id minima facilis. Corrupti dignissimos est ab quis porro?</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

// say everything went fine 
export default About;