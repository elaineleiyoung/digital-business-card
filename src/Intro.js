import React from "react";
import img from './img.jpeg';

function Intro(){
    return (
        <div className="Basics">
            <img className="Profile" src={img} width={80} />
            <h1>Elaine Leiyoung</h1>
            <p2>CS & Economics</p2>
            <p3>+1 (510) 857-9863 </p3>
            <p3>eleiyoun@bu.edu</p3>
            <br></br>
            <a href="https://www.linkedin.com/in/eleiyoung/">
                <button> LinkedIn</button>
            </a>
            <a href="mailto:eleiyoun@bu.edu">
                <button>Email</button>
            </a>
        </div>
    )
}
export default Intro