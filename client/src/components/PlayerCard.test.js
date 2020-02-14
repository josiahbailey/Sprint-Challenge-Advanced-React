import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerCard from './PlayerCard'

test('name, country, and searches nodes are rendering', () => {
    const player = {
        name: 'name',
        country: 'country',
        searches: 1
    }
    const { getByText } = render(<PlayerCard player={player} />);
    getByText(/name/i);
    getByText(/country/i);
    getByText(/1/i);
  });

  