import React, { useState, useEffect, useRef } from 'react';
import './TerminalInput.css';

const TerminalInput = ({ onCommand, commandHistory, historyIndex, setHistoryIndex }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (historyIndex >= 0 && historyIndex < commandHistory.length) {
      setInputValue(commandHistory[historyIndex]);
    } else if (historyIndex === commandHistory.length) {
      setInputValue('');
    }
  }, [historyIndex, commandHistory]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = inputValue.trim();
      if (command) {
        onCommand(command);
        setInputValue('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length) {
        setHistoryIndex(historyIndex + 1);
      }
    }
  };

  return (
    <div className="input-container">
      <span className="prompt">root@cyber:~#</span>
      <input
        type="text"
        className="terminal-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type command..."
        ref={inputRef}
      />
      <span className="cursor"></span>
    </div>
  );
};

export default TerminalInput;