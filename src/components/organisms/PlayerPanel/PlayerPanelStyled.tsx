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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const NameHeading = styled.h2<INameHeading>`
  margin: 0.3rem;
  text-decoration: ${(props) => isActive(props)};
`;
