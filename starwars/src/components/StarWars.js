import React from 'react';
import './StarWars.css';

const StarWars = props => {
    return(
        <div className="star-wars">
            <p className="name">{props.wars.name}</p> 
            <p className="height">Height: {props.wars.height}</p> 
            <p className="hairColor">Hair Color: {props.wars.hair_color}</p> 
            <p className="birthYear">Birth Year: {props.wars.birth_year}</p> 
            <p className="gender">Gender: {props.wars.gender}</p> 
            {/* <p>{props.wars.eye_clor}</p>  */}
            {/* <p>{props.wars.species}</p>  */}
            {/* <p>{props.wars.vehicles}</p>  */}
        </div>
    )
}

export default StarWars;