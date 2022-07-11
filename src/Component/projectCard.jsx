import React from "react";

function projectCard(props){
    return(
        <div className="projectCard">
            <div className="projectContent">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p><span style={{fontweight:"bolder"}}>TechStack:</span>{props.techstack}</p>
            </div>
         <a href={props.url} target="_blank"><button className="button"><span>View Website</span></button></a>
        </div>
    );
}

export default projectCard;