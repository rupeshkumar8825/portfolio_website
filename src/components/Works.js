// this is the work page where i will list the works 
import React from 'react';
import "../css/Work.css";
import todolist from "./todolist.jpg";
import blog from "./blogwebsite.jpg";

// defining the functional component of the work page 
const Works = () => {

    return (
        <>
            <div className="work-container">
                <h1 id='work-heading'>Recent Works </h1>
                {/* we have to have the another div to store the values of the works  */}
                {/* adding the image for the work and showing the projects  */}
                <div className="works">
                    <div className="work-contents">
                        <a href="https://github.com/rupeshkumar8825/todo_combo"><img src={todolist} alt="Todolist" />
                            <h2> Website for Daily Learners</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo rerum beatae voluptas sapiente autem? Non error dolor itaque totam? Eligendi!</p>
                        </a>
                    </div>
                    <div className="work-contents">
                        <a href="https://rupeshkumar8825.github.io/bootstrap_website/"><img src={blog} alt="Blog website" />
                            <h2>A Simple Blogging Website</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi temporibus vel odio quo odit impedit nam in est quod veniam.</p>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}


// say everything went fine 
export default Works;