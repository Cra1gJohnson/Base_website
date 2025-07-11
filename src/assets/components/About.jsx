import React from "react";
import Media from "./Media";
function About() {
    return (
        <div id="About" style={{ display: 'flex', justifyContent: 'center' , gap: '1rem'}}>
            
            <Media />
            <div>
               <h1>about</h1>
            </div>
        </div>
    );
};

export default About;