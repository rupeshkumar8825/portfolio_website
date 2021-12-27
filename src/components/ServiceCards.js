// this is the component for the services cards that are there to list out all the services that we provide 
import React from 'react';

// defining the component for the service cards 
const ServiceCard = (props) => {
    console.log("this is the service card");

    return (
        <>
            <div className="service-card">
                <img src={props.image} alt={props.alt} />
                <h1>{props.heading}</h1>
                <p>{props.content}</p>
            </div>
        </>
    )
}

// say everything went fine 
export default ServiceCard;