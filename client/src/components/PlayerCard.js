import React from 'react';

const PlayerCard = ({player}) => {
    const { name, country, searches} = player
    return (  
        <div className='card'>
            <h2>{name}</h2>
            <h3>{country}</h3>
            <h3>{searches}</h3>
        </div>
    );
}
 
export default PlayerCard;