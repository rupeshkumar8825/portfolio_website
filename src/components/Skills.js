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
                <h1 id='skill-heading'>Hi this is the skill section of the portfolio website </h1>
                <div className="skill-container">
                    <div className="particular-skill">
                        <h2>HTML</h2>
                        <div className="skill-bar" id='html'>
                            90%
                        </div>
                    </div>
                    <div className="particular-skill" >
                        <h2>CSS</h2>
                        <div className="skill-bar" id='css'>
                            70%
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>JS</h2>
                        <div className="skill-bar" id='js'>
                            60%
                        </div>
                    </div>
                    <div className="particular-skill">
                        <h2>NodeJs</h2>
                        <div className="skill-bar" id='nodejs'>
                            50%
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