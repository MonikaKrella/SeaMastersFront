import styled from 'styled-components';

interface INameHeading {
  active: boolean;
}

const isActive = (props: INameHeading) => {
  if (props.active === true) {
    return '#5688cb';
  } else {
    return '#ccccca';
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
  background-color: ${(props) => isActive(props)};
  border-radius: 10px;
`;
