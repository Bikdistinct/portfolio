import React from "react";
import SkillCard from "./skillCard";
import Photoskill from "../skillPhoto";
function Skills(){
    return(
        <div className="Skills">
      {Photoskill.map(skillPhoto=>(
        <SkillCard
        url={skillPhoto.URL}
        />
      ))}
        </div>
    );
}

export default Skills;

