// this is the main place where all the code will be merged 
import React from 'react';
import "./index.css"
import Home from "./components/Home";

// defining the funciton for the component 
const App = () => {
    console.log("this is the app component ");

    // say everything went fine 
    return (
        <>
            <Home></Home>
        </>
    )
}

// exporting this 
export default App;
