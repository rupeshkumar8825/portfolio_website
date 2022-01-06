// this is the skill section of the portfolio website 
import React from 'react';
// importing the css for this page 
import "../css/Skill.css";

// defining the functional component of the my skills section 
const Skills = () => {
    console.log("right now at the skill section ");

    return (
        <>
            <div className="skill">
                <h1 id='skill-heading'>My Skills </h1>
                <div className="skill-container">
                    <div className="particular-skill">
                        <h2>HTML</h2>
                        <div className="skill-bar" id='html'>
                            <p>90%</p>
                        </div>
                    </div>
                    <div className="particular-skill" >
                        <h2>CSS</h2>
                        <div className="skill-bar" id='css'>
                            <p>70%</p>
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>JS</h2>
                        <div className="skill-bar" id='js'>
                            <p>60%</p>
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>NodeJs</h2>
                        <div className="skill-bar" id='nodejs'>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>ReactJs</h2>
                        <div className="skill-bar" id='reactjs'>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>MongoDB</h2>
                        <div className="skill-bar" id='mongodb'>
                            <p>50%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// say everything went fine
// exporting this functional component to the app.js for using this 
export default Skills;