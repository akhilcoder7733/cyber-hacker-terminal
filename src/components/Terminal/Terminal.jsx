import React from 'react';
import './Terminal.css';
import TerminalLine from './TerminalLine';
import MatrixBackground from '../MatrixBackground';

const Terminal = ({ lines, terminalRef }) => {
  return (
    <div className="terminal-container" ref={terminalRef}>
      <MatrixBackground/>
      {lines.map((line, index) => (
        <TerminalLine key={index} type={line.type} text={line.text} />
      ))}
    </div>
  );
};

export default Terminal;
