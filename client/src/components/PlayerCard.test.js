import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerCard from './PlayerCard'

test('name, country, and searches nodes are rendering', () => {
    const player = {
        name: 'name',
        country: 'country',
        searches: 1,
        id: 0
    }
    const { getByText } = render(<PlayerCard key={player.id} player={player} />);
    getByText(/name/i);
    getByText(/country/i);
    getByText(/1/i);
  });

