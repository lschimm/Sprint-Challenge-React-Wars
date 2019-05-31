import React, { Component } from 'react';

import '../App.css'

const StarWars = props => {
    return(
        <div className="star-wars">
            <div className="name">
            <p>{props.wars.name}</p> 
            </div>
            <p>Height: {props.wars.height}</p> 
            <p>Hair Color: {props.wars.hair_color}</p> 
            <p>Birth Year: {props.wars.birth_year}</p> 
            <p>Gender: {props.wars.gender}</p> 
            {/* <p>{props.wars.eye_clor}</p>  */}
            {/* <p>{props.wars.species}</p>  */}
            {/* <p>{props.wars.vehicles}</p>  */}
        </div>
    )
}

export default StarWars;