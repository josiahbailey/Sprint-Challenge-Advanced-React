import React from 'react';
import PlayerCard from './PlayerCard'
import useStyledCard from '../hooks/useStyledCard'

const PlayerList = ({players}) => {
    const [card, setCardData] = useStyledCard(1)
    return (  
        <div className='list'>
            {players.map(player => {
                // <PlayerCard player={player}/>
                setCardData(player)
                return card
        })}
        </div>
    );
}
 
export default PlayerList;