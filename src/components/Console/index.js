import React, { useState, useEffect } from 'react';
import ConsoleHeader from '../ConsoleHeader';
import Entry from '../Entry';
import {
  StyledConsole,
  ConsoleBody,
  ConsoleLine,
  CommandResult,
} from './styles';

const LoginMessage = () => (
  <>
    <p>Login successful</p>
    <p>
      Welcome to spyce.codes! For a full list of commands, use "?" or "help"
    </p>
  </>
);

const commands = {
  help() {
    return Object.keys(commands);
  },
  '?'() {
    return Object.keys(commands);
  },
  links() {
    return [
      <a href="https://twitter.com/SpyceCodes" target="_blank" rel="noreferrer">
        Twitter
      </a>,
      <a href="https://twitch.tv/SpyceVT" target="_blank" rel="noreferrer">
        Twitch
      </a>,
      <a href="https://github.com/ItsSpyce" target="_blank" rel="noreferrer">
        GitHub
      </a>,
    ];
  },
  about() {
    return [
      "My my...curious, aren't we?",
      "I'm just a vtuber here to show people the fun of coding and playing games, hopefully you'll stick around?",
    ];
  },
};

const Console = () => {
  const [entries, setEntries] = useState([]);
  const [results, setResults] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [selectingHistory, setSelectingHistory] = useState(
    commandHistory.length
  );

  function getPriorCommand() {
    if (selectingHistory === 0) return commandHistory[0] || '';
    const index = selectingHistory - 1;
    setSelectingHistory(index);
    return commandHistory[index];
  }

  function getNextCommand() {
    if (selectingHistory === commandHistory.length - 1)
      return commandHistory[selectingHistory] || '';
    const index = selectingHistory + 1;
    setSelectingHistory(index);
    return commandHistory[index];
  }

  function submitText(text) {
    setCommandHistory([...commandHistory, text]);
    const command = commands[text.trim()];
    const result = command
      ? command()
      : ['Unknown command. Use "?" or "help" for a list of commands'];
    setResults([...results, result]);
    setEntries([...entries, text]);
    setSelectingHistory(entries.length + 1);
  }
  return (
    <StyledConsole>
      <ConsoleHeader />
      <ConsoleBody>
        <LoginMessage />
        {entries.map((entry, i) => (
          <div key={i}>
            <Entry content={entry} isPrior />
            <>
              {results[i].map((line, j) => (
                <CommandResult key={j}>{line}</CommandResult>
              ))}
            </>
          </div>
        ))}
        <ConsoleLine>
          <Entry
            isPrior={false}
            onSubmit={submitText}
            nextCommand={getNextCommand}
            priorCommand={getPriorCommand}
          />
        </ConsoleLine>
      </ConsoleBody>
    </StyledConsole>
  );
};

export default Console;
