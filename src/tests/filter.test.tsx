import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoBox } from '../components/infoBox';

test('renders learn react link', () => {
  render(<InfoBox />);
  const linkElement = screen.getByText(/info/i);
  expect(linkElement).toBeInTheDocument();
});