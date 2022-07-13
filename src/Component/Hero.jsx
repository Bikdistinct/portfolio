import React from "react";
import mypic from "../images/bik.jpg";
    function Hero() {
        return (
            <div className="hero">
                <div></div>
                <div className="heroContent">
                    <p><h2 className="typing-demo1">I'm Bikramjit</h2></p>
                    <p className="typing-demo2">MERN Stack Developer</p>
                </div>
                <div></div>
                <div className="heroImage">
                    <img className="img" src={mypic} alt="das"  />
                </div>
                <div></div>
            </div>
        );
    }

export default Hero;