import React, { Component } from 'react';

const StarWars = props => {
    return(
        <div className="star-wars">
            <p>{props.wars.name}</p> 
            <p>{props.wars.height}</p> 
            <p>{props.wars.mass}</p> 
        </div>
    )
}

export default StarWars;