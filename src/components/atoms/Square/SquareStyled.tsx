import styled from 'styled-components';

const getColor = (props: any) => {
  switch (props.bg) {
    case 'Unknown':
      return `#3B79CD `;
    case 'Hit':
      return `#993115`;
    case 'Miss':
      return `#A09F8B`;
    case 'Empty':
      return `#7EA1BB`;
    case 'Ship':
      return `#A76A21`;
    default:
      return `#3B79CD`;
  }
};

export const SquareStyled = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: lightblue;
  background-color: ${(props) => getColor(props)};
  width: 1.3rem;
  height: 1.3rem;
`;
