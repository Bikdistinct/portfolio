import React from "react";
import ProjectCard from "./projectCard";
import projectDes from "../project";
function project(){
    return(
        <div className="Projects">
         {projectDes.map(descrp=>(
            <ProjectCard
            title={descrp.Title}
            description={descrp.Description}
            techstack={descrp.TechStack}
            url={descrp.URL}
            />))} 

    </div>
    );
}

export default project;