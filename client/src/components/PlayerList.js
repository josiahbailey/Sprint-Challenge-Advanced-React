import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = ({players}) => {
    return (  
        <div className='list'>
            {players.map(player => (
                <PlayerCard player={player}/>
            ))}
        </div>
    );
}
 
export default PlayerList;