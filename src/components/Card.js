import React from "react";

function Card(props){
    return(
        <div className="Card">
            <img src={props.routeee} alt="" />
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Card;    