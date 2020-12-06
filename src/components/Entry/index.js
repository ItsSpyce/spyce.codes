import React, { useState } from 'react';
import { Input, LocationText, PriorInput, StyledEntry } from './styles';

const Entry = ({
  isPrior,
  result,
  content,
  onSubmit,
  nextCommand,
  priorCommand,
}) => {
  const [input, setInput] = useState(content || '');
  return (
    <StyledEntry>
      <LocationText>visitor@spyce.codes</LocationText>
      {!isPrior && (
        <Input
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          onKeyDown={(event) => {
            switch (event.keyCode) {
              case 13:
                event.preventDefault();
                onSubmit(input);
                setInput('');
                break;
              case 38:
                event.preventDefault();
                return setInput(priorCommand());
              case 40:
                event.preventDefault();
                return setInput(nextCommand());
              default:
              // ignore
            }
          }}
          autoFocus
        />
      )}
      {isPrior && <PriorInput>{content}</PriorInput>}
    </StyledEntry>
  );
};

export default Entry;
