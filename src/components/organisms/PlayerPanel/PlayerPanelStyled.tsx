import styled from 'styled-components';

interface INameHeading {
  active: boolean;
}

const isActive = (props: INameHeading) => {
  if (props.active === true) {
    return 'underline;';
  } else {
    return 'none';
  }
};

export const PlayerPanelStyled = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NameHeading = styled.h2<INameHeading>`
  margin: 0.5rem;
  text-decoration: ${(props) => isActive(props)};
`;
