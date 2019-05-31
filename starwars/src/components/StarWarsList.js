import React, { Component } from 'react';
import StarWars from './StarWars';
import '../App.css'


const StarWarsList = props => {
    return (
        <div className="starwars-list">
            {props.wars.map(war => (
                <div>
                    <StarWars 
                    wars={war}
                    />
                </div>
            ))}
        </div>
    )
}



export default StarWarsList;