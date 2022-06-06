import { render, screen } from '@testing-library/react';

import App from './App';

test('App should contains nav', () => {
  render(<App />);
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
});

test('App should contains footer', () => {
  render(<App />);
  const footer = screen.getByRole('contentinfo');
  expect(footer).toBeInTheDocument();
});
