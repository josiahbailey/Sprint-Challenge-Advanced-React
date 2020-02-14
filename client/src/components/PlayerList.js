import React from 'react';
import PlayerCard from './PlayerCard'
// import useStyledCard from '../hooks/useStyledCard'

const PlayerList = ({players}) => {
    // const [card, setCard] = useStyledCard()
    return (  
        <div className='list'>
            {players.map(player => (
                 <PlayerCard player={player}/>
            ))}
        </div>
    );
}
 
export default PlayerList;