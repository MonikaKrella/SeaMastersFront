import { render, screen } from '@testing-library/react';

import App from '../../../../App';
import NavLink from '../NavLink';

test('Renders link to rules paga', () => {
  render(<App />);
  const navLink = screen.getByText(/rules/i);
  expect(navLink).toBeInTheDocument();
});
