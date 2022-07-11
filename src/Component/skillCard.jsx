import React from "react";

function skillCard(props){
    return(
        <div className="Card">
        <img className="imgCard" src={props.url} alt="Skillimg"/>
        {/* <!-- <progress id="file" value="32" max="100"> 32% </progress> --> */}
    </div>
    );
}

export default skillCard;