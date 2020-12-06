import React from 'react';
import MinusIcon from '../../icons/minus.svg';
import SquareIcon from '../../icons/square.svg';
import XIcon from '../../icons/x.svg';
import {
  ConsoleHeaderButtonGroup,
  StyledConsoleHeader,
  HeaderButtonX,
  HeaderButton,
  HeaderButtonImage,
} from './styles';

const ConsoleHeader = () => (
  <StyledConsoleHeader>
    <ConsoleHeaderButtonGroup>
      <HeaderButtonX>
        <HeaderButtonImage src={XIcon} />
      </HeaderButtonX>
      <HeaderButton>
        <HeaderButtonImage src={MinusIcon} />
      </HeaderButton>
      <HeaderButton>
        <HeaderButtonImage src={SquareIcon} />
      </HeaderButton>
    </ConsoleHeaderButtonGroup>
  </StyledConsoleHeader>
);

export default ConsoleHeader;
