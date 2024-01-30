import React from "react";
// import {Link} from "react-router-dom";


function Card1(props){
    return(
        <div className="Card1">
            <img src={props.route} alt="" />
            <h4>{props.head}</h4>
            <p>{props.desc}</p>
            {/* <Link className="button" to={props.linkk}>Read More</Link> */}
        </div>
    )
}

export default Card1;