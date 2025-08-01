import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Terminal from './components/Terminal/Terminal';
import TerminalInput from './components/Terminal/TerminalInput'; // Add this import
import Sidebar from './components/Sidebar/Sidebar';
import BottomPanel from './components/BottomPanel/BottomPanel';
import MatrixRain from './components/MatrixRain/MatrixRain';
import { useTerminal } from './hooks/useTerminal';
import { useSystemStats } from './hooks/useSystemStats';

const App = () => {
  const { 
    terminalLines, 
    executeCommand, 
    clearTerminal,
    commandHistory,
    historyIndex,
    setHistoryIndex
  } = useTerminal();
  
  const { systemStats, attackProgress } = useSystemStats();
  
  const terminalRef = useRef(null);
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <div className="app-container">
      <div className="terminal-layout">
      <MatrixRain />
        <Header 
          onRunExploit={() => executeCommand('exploit')}
          onClear={clearTerminal}
          onDownloadData={() => executeCommand('download')}
        />
        <div className="main-content">
          <div className="terminal-section">
            <Terminal 
              lines={terminalLines} 
              terminalRef={terminalRef} 
            />
            <TerminalInput 
              onCommand={executeCommand}
              commandHistory={commandHistory}
              historyIndex={historyIndex}
              setHistoryIndex={setHistoryIndex}
            />
          </div>
          <Sidebar 
            systemStats={systemStats} 
            attackProgress={attackProgress} 
          />
        </div>
        <BottomPanel />
      </div>
    </div>
  );
};

export default App;