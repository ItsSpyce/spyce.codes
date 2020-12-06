import styled from 'styled-components';

export const StyledConsoleHeader = styled.div`
  padding: 2px 4px;
  background-color: ${(props) => props.theme.BG_200};
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &::after {
    content: '';
    background-image: linear-gradient(
      to right top,
      #208fc9,
      #00a1d0,
      #00b2d3,
      #00c2d0,
      #2cd1ca
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
  }
`;

export const ConsoleHeaderButtonGroup = styled.ul`
  list-style: none;
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px;
  width: 130px;
`;

export const HeaderButton = styled.div`
  border-radius: 50%;
  background-color: #757575;
  display: inline;
  height: 28px;
  width: 28px;
  cursor: pointer;
`;

export const HeaderButtonImage = styled.img`
  height: 16px;
  width: 16px;
  margin: 6px;
`;

export const HeaderButtonX = styled(HeaderButton)`
  background-color: ${(props) => props.theme.RED_100};
`;
