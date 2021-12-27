// this is the service page for the portfolio website 
import React from 'react';
import "../css/Service.css";
// we have to import the pics and define some of the contents for the services cards 
import development from "./developer2.PNG";
import design from "./website-design2.PNG";
import youtubers from "./youtubers.png"
import startups from "./startups.PNG";
import support from "./support2.PNG";
// import responsive from "./responsive.png";
import seo from "./seo2.PNG";
import ServiceCards from './ServiceCards';
import "../css/Service-card.css";



// defining the functional component of the services section of the website 
const Service = () => {
    console.log("this is the services component");
    const content1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat, repudiandae quod impedit "




    return (
        <>
            <h1 id='service-heading'>Services</h1>
            <div className="service-container">
                <ServiceCards image={development} heading="Development" content={content1}></ServiceCards>
                <ServiceCards image={design} alt="loading" heading="Design" content={content1}></ServiceCards>
                <ServiceCards image={seo} alt="loading" heading="SEO" content={content1}></ServiceCards>
                <ServiceCards image={youtubers} alt="loading" heading="Youtubers" content={content1}></ServiceCards>
                <ServiceCards image={startups} alt="loading" heading="Startups" content={content1}></ServiceCards>
                <ServiceCards image={support} alt="loading" heading="Support" content={content1}></ServiceCards>


            </div>
        </>
    )
}

// say everything went fine 
export default Service;