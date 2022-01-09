// this is the main place where all the code will be merged 
import React from 'react';
import "./index.css"
import Home from "./components/Home";
import About from './components/About';
import Service from './components/Service';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skills';
import Process from './components/Process';



// calling the function if the component is being scrolled 
// defining the onscroll handler for this in the react
const handleOnScroll = () => {
    console.log("the page is being scrolled by the user ");

    const navigation = document.querySelector(".navigation");
    const navbar = document.querySelector(".navbar");
    const navbarli = document.querySelectorAll(".navbar li");
    const navbarlia = document.querySelectorAll(".navbar li a");
    console.log(navbarlia);
    console.log(navbarli);
    // now we can make the changes with this
    // applying the if else statement 
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        console.log("above 80");
        // here we have to change the css property of the navigation 
        // console.log(navigation);
        navigation.style.backgroundColor = "#1b1a1a";
        navbar.style.backgroundColor = "#1b1a1a";
        // using the for loop for this purpose 
        for (let i = 0; i < navbarli.length; i++) {
            navbarli[i].style.backgroundColor = "#1b1a1a";
            navbarlia[i].style.backgroundColor = "#1b1a1a";

        }

    }
    else {
        console.log("the color of the normal must be the normal black");
        navigation.style.backgroundColor = "black";
        navbar.style.backgroundColor = "black";
        for (let i = 0; i < navbarli.length; i++) {

            navbarli[i].style.backgroundColor = "black";
            navbarlia[i].style.backgroundColor = "black";

        }


    }

    // say everything went fine 
    return;
}

// this is the event handler for the scrolling the window down to the webpage 
window.onscroll = function () { handleOnScroll() };



// defining the funciton for the component 
const App = () => {
    console.log("this is the app component ");

    // say everything went fine 
    return (
        <>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Service></Service>
            <Process></Process>
            <Works></Works>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

// exporting this 
export default App;
