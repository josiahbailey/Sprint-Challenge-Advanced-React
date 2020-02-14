import React, {useState} from 'react';
import styled from 'styled-components'

const useStyledCard = (initialPlayer = {}) => {
    const [player, setPlayer] = useState(initialPlayer)
    const { name, country, searches} = player

    const Card = (
        <div className='card'>
            <h2>{name}</h2>
            <h3>{country}</h3>
            <h3>{searches}</h3>
        </div>
    )

    const PlayerCard1 = styled(JSON.parse(Card))`
        font-size: 1.2rem;
        color: white;
        background: black;
        border: 2px solid white;
        border-radius: 15px;
    `

    const PlayerCard2 = styled(Card)`
        font-size: 1.2rem;
        color: black;
        background: grey;
        border: 2px solid black;
        border-radius: 15px;
    `

    const PlayerCard3 = styled(Card)`
        font-size: 1.2rem;
        color: white;
        background: red;
        border: 2px solid green;
        border-radius: 15px;
    `

    const checkStyle = int => {
        if (int === 1) {
            return PlayerCard1
        } else if (int === 2) {
            return PlayerCard2
        } else if (int === 3) {
            return PlayerCard3
        } else {
            return 'Style Number Invalid'
        }
    }

    const PlayerSetter = value => {
        setPlayer(value)
    }

    return [checkStyle, PlayerSetter]
}
 
export default useStyledCard;