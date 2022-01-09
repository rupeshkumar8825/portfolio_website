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
    const content_development = "We develop dynamic and static websites for the youtubers, startups and small bussiness. "
    const content_design = "We also design the websites from scratch according to the needs of the clients. Designs according to current trend."
    const content_seo = "We optimise the website using the SEO techniques to rank the website on various search engines."
    const content_youtubers = "Youtubers are our main target. We provide best services to youtubers to increase their audience engagement."
    const content_startups = "We make websites for early stage startups to digitally solve the problem. We love to take these projects."
    const content_support = "If our clients face any problem in future, regarding updating the websites and so on, we are always ready to support them."





    return (
        <>
            <div id='service'>
                <h1 id='service-heading'>Services</h1>
                <div className="service-container">
                    <ServiceCards image={development} heading="Development" content={content_development}></ServiceCards>
                    <ServiceCards image={design} alt="loading" heading="Design" content={content_design}></ServiceCards>
                    <ServiceCards image={seo} alt="loading" heading="SEO" content={content_seo}></ServiceCards>
                    <ServiceCards image={youtubers} alt="loading" heading="Youtubers" content={content_youtubers}></ServiceCards>
                    <ServiceCards image={startups} alt="loading" heading="Startups" content={content_startups}></ServiceCards>
                    <ServiceCards image={support} alt="loading" heading="Support" content={content_support}></ServiceCards>


                </div>

            </div>
        </>
    )
}

// say everything went fine 
export default Service;