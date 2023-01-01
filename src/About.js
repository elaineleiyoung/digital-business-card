import React from "react";
import Contact from './Contact.js';

function About(){
    return (
        
        <div className="About">
            <h2> About:</h2>
            <p3>I am a sophomore at Boston University 
                pursuing an undergraduate degree in Computer Science
                and Economics. I am interested in software engineering, development operations,
                and quantitative trading roles. </p3>

            <h2> Skills:</h2>
            <ul className="Skill-list">
                <li> Languages: JAVA, Python, HTML/CSS, Swift, Bash </li>
                <li>Frameworks and Libraries: NumPy, Flask, Jinja, React</li>
                <li>Tools: Linux, Git, Docker, XCode, VSCode, MySQL, DigitalOcean</li>
            </ul>
            <Contact />
        </div>
    )
}

export default About