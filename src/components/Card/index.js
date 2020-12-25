import React from "react";
import "./style.css";

// Importing React and css files

// The Card function component accepts prop argument
function Card(props) {
    return (

        <div className="card">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
            <div>{props.gender}</div>
            <div>{props.age}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default Card;