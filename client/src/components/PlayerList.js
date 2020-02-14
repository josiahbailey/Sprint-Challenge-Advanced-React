import React from 'react';
import PlayerCard from './PlayerCard'
import useDarkMode from '../hooks/useDarkMode'
// import useStyledCard from '../hooks/useStyledCard'

const PlayerList = ({players}) => {
    const [setMode] = useDarkMode()
    // const [card, setCard] = useStyledCard()
    return (  
        <div>
            <nav>
                <button onClick={e => setMode()}>Mode</button>
            </nav>
            <div className='list'>
                {players.map(player => (
                    <PlayerCard key={player.id} player={player}/>
                ))}
            </div>
        </div>
    );
}
 
export default PlayerList;