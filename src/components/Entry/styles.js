import styled from 'styled-components';

export const StyledEntry = styled.div``;

export const LocationText = styled.div`
  color: ${(props) => props.theme.BLUE_400};
  display: inline;

  &::after {
    color: white;
    content: ':';
    margin-right: 4px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  display: inline;
  color: white;
  font-family: source-code-pro, monospace;
  font-size: 16pt;
  display: inline;
`;

export const PriorInput = styled.div`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  display: inline;
  color: white;
  font-family: source-code-pro, monospace;
  font-size: 16pt;
  display: inline;
`;
