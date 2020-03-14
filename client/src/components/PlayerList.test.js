import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/react';
import PlayerList from './PlayerList'

test('cards appear for mapped data', () => {
    const playerData = [
        {name: 'name', country: 'country', searches: 1, id: 0},
        {name: 'diffname', country: 'somecountry', searches: 1, id: 1},
        {name: 'anotherdiffname', country: 'somewherecountry', searches: 1, id: 2}
    ]
    const { getByTestId } = render(<PlayerList players={playerData} />)

    const player1 = getByTestId(/0/i)
    const player2 = getByTestId(/1/i)
    const player3 = getByTestId(/2/i)

    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
    expect(player3).toBeInTheDocument();
})