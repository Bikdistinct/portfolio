import React from "react";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import About from "./About";
import Skill from "./Skills";
import Project from "./Projects";
import Footer from "./Footer";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App(){
    return(
        <div>
            <Hero/>
            <Router>
            <div className="navigationBar">
               
            <Link to="/about"><div className="navClass1">About</div></Link>
        <div className="navClass2"><Link to="/skill"  >Skills</Link></div>
        <div className="navClass3"><Link to="/project"  >Projects</Link></div>
   
        {/* <div className="navClass4"><Link to="/about">Contact</Link></div> */}
        </div>
            
           <Routes>
           <Route exact path="/about" element={<About />} />
            <Route exact path="/skill" element={<Skill />} />
            <Route exact path="/project" element={<Project/>}/>
           

           </Routes>
         
            </Router>
            <Footer/>
        </div>
    );
}

export default App;