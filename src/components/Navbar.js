// this is the navbar component of the portfolio website 
import React, { useState } from 'react';
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


    // we also have to use the state hooks for this purpose 
    const [toggle, setToggle] = useState(0);
    const navigation2 = document.getElementsByClassName('navigation2');
    // adding the event handler in the react for this purpose 
    const toggleNavbar = () => {
        console.log("the navbar has been toggled");
        // applying the if else statement 
        if (toggle == 0) {
            // then we need to show the navbar in the responsive case 
            setToggle(1);
            navigation2[0].style.display = "block";
        }
        else {
            setToggle(0);
            navigation2[0].style.display = "none";
        }
    }

    return (
        <>
            <nav className="navigation">
                <h1 className="logo">
                    Rupesh
                </h1>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about_container">About</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#work-heading">Works</a></li>
                    <li><a href="#contact-heading">Contact</a></li>
                </ul>

                <div className="hamburger" onClick={toggleNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {/* we also want to add the hamburger for this purpose  */}
            </nav>



            {/* adding the navbar for the responsiveness of the website  */}
            {/* for the hamburger we have to add the new navigation menu and then we will hide that thing */}
            <nav className="navigation2">
                <ul className="navbar2">
                    <li><a href="#home" onClick={toggleNavbar}>Home</a></li>
                    <li><a href="#about_container" onClick={toggleNavbar}>About</a></li>
                    <li><a href="#service" onClick={toggleNavbar}>Service</a></li>
                    <li><a href="#work-heading" onClick={toggleNavbar}>Works</a></li>
                    <li><a href="#contact-heading" onClick={toggleNavbar}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

// say everything went fine
export default Navbar;

