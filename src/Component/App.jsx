import React from "react";
import Hero from "./Hero";
// import Navbar from "./Navbar";
import About from "./About";
import Skill from "./Skills";
import Project from "./Projects";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App(){
    return(
        <div>
            <Hero/>
            <Router>
            <div className="navigationBar">
                <nav>
        <div className="navClass1"><Link to="/about">About</Link></div>
        <div className="navClass2"><Link to="/skill">Skills</Link></div>
        <div className="navClass3"><Link to="/project">Projects</Link></div>
        </nav>
        {/* <div className="navClass4"><Link to="/about">Contact</Link></div> */}
        </div>
            
           <Switch>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/skill">
                <Skill/>
            </Route>
            <Route exact path="/about">
                <Project/>
            </Route>

           </Switch>
            </Router>
        </div>
    );
}

export default App;