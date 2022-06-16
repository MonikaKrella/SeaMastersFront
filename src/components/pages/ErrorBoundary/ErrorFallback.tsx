import React from 'react';

import logo from '../../../assets/seamlogo.png';
import { ErrorFallbackStyled, LogoAtError } from './ErrorFallbackStyled';
import { LOGO_ALT } from '../../../consts/texts';

function ErrorFallback() {
  return (
    <ErrorFallbackStyled>
      <LogoAtError src={logo} alt={LOGO_ALT}></LogoAtError>
      <h1>Yo ho, yo ho!</h1>
      <h3>Something destoryed our battle!</h3>
      <h3>Refresh the page to start again</h3>
    </ErrorFallbackStyled>
  );
}

export default ErrorFallback;
