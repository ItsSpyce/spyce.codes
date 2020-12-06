import styled from 'styled-components';

export const StyledConsole = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.theme.BG_100};
  height: 800px;
  width: 900px;
  margin: 20vh auto 0 auto;

  a {
    color: ${(props) => props.theme.BLUE_100};

    &::before {
      content: '#';
    }
  }

  @media (max-width: ${(props) => props.theme.breakpointTablet}) {
    width: 500px;
  }
`;

export const ConsoleBody = styled.div`
  padding: 20px 8px;
  overflow-y: auto;
`;

export const ConsoleLine = styled.div`
  display: block;

  & > * {
    display: inline;
  }
`;

export const CommandResult = styled.div``;
