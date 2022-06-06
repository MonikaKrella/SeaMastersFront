import { render, screen } from '@testing-library/react';

import MainButton from '../MainButton';
import { ButtonStyle } from '../../../../types/enums/buttonStyles.enum';

test('renders MainButtton', () => {
  const onClick = () => {
    console.log('clicked');
  };

  render(
    <MainButton
      bg={ButtonStyle.Primary}
      btnText="Testing button"
      handleOnClick={onClick}
    />
  );
  const button = screen.getByRole('button');
  const buttonByText = screen.getByText(/testing button/i);

  expect(buttonByText).toBeInTheDocument();

  expect(button).toBeDefined();
  expect(button).toBeEnabled();
});
