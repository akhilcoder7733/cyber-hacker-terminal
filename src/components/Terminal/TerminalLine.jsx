import React from 'react';
import './TerminalLine.css';
import TypingLine from '../TypingLine';

const TerminalLine = ({ type, text }) => {
  const renderContent = () => {
    switch (type) {
      case 'prompt':
        return (
          <>
            <span className="prompt">root@cyber:~# </span>
            <TypingLine text={text} className="command" />
          </>
        );
      case 'output':
        return <TypingLine text={text} className="output" />;
      case 'error':
        return <TypingLine text={text} className="error" />;
      case 'success':
        return <TypingLine text={text} className="success" />;
      case 'warning':
        return <TypingLine text={text} className="warning" />;
      default:
        return <TypingLine text={text} className="output" />;
    }
  };

  return <div className="terminal-line">{renderContent()}</div>;
};

export default TerminalLine;
