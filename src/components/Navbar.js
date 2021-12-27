// this is the navbar component of the portfolio website 
import React from 'react';
import "../css/Home.css";
// defining the functional component for the navbar 
const Navbar = () => {
    console.log("the navbar component");

    // // defining the onscroll handler for this in the react
    // const handleOnScroll = () => {
    //     console.log("the page is being scrolled by the user ");

    //     // now we can make the changes with this
    //     // applying the if else statement 
    //     if (document.body.scrollTop > document.body.scrollHeight) {
    //         console.log("now at this point the color of the navbar must be changed");
    //     }
    //     else {
    //         console.log("the color of the normal must be the normal black");
    //     }

    //     // say everything went fine 
    //     return;
    // }

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

