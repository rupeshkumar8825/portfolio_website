// this is the main place where all the code will be merged 
import React from 'react';
import "./index.css"
import Home from "./components/Home";
import About from './components/About';

// defining the funciton for the component 
const App = () => {
    console.log("this is the app component ");

    // say everything went fine 
    return (
        <>
            <Home></Home>
            <About></About>
        </>
    )
}

// exporting this 
export default App;
