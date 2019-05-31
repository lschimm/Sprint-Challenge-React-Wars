import React from 'react';
import StarWars from './StarWars';
import './StarWarsLists.css'


const StarWarsList = props => {
    return (
        <div className="starwars-list">
            {props.wars.map(war => (
                <div>
                    <StarWars 
                        wars= {war}
                        key= {war.created}
                     />
                </div>
            ))}
        </div>
    )
}



export default StarWarsList;