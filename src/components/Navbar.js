// this is the navbar component of the portfolio website 
import React from 'react';
import "../css/Home.css";
// defining the functional component for the navbar 
const Navbar = () => {
    console.log("the navbar component");

    return (
        <>
            <nav className="navigation">
                <h1 className="logo">
                    Rupesh
                </h1>
                <ul className="navbar">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/work">Works</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

// say everything went fine
export default Navbar;

