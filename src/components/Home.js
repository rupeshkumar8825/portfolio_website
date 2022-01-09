// this is the home page for the website
// it will consists of the navbar and the middle part 
import React from 'react';
import Navbar from './Navbar';
import "../css/Home.css";
// adding the functional component of the home page 
const Home = () => {
    console.log("right at the home component");

    return (
        <>
            <Navbar></Navbar>
            {/* adding the rest of the portion for the website  */}
            <div className="home-container">
                <h3>Hi There, I'm</h3>
                <h1>Rupesh Kumar</h1>
                <p>Web Developer, Web Designer, Passionate Learner</p>
            </div>
        </>
    )
}

// say everything went fine 
export default Home;