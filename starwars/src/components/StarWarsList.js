import React, { Component } from 'react';
import StarWars from './StarWars';

// const StarWarsList = props => {
//     return (
//             <div className="starwars-list">
//                 {props.swars.map(swar => (
//                         <StarWars />
//                 ))}
//             </div>
//     )
// }

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