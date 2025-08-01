// src/hooks/useTerminal.js
import { useState, useEffect, useCallback } from 'react';
import { processCommand } from '../utils/commands';

// Initial lines shown when terminal boots
const initialLines = [
  { type: 'output', text: 'TerminalWizard v3.0 - BOOTING SYSTEM...' },
  { type: 'output', text: 'Verifying BIOS... OK' },
  { type: 'output', text: 'Loading kernel modules...' },
  { type: 'success', text: '✓ Firewall evasion protocol: ACTIVE' },
  { type: 'success', text: '✓ Anti-trace scripts initialized' },
  { type: 'output', text: 'Injecting virtual presence into darknet layer...' },
  { type: 'success', text: '✓ Connected to proxy grid [12 nodes]' },
  { type: 'output', text: 'Welcome to CyberOps Terminal. Type "help" to get started.' },
];

export const useTerminal = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Delay simulation for boot logs and command outputs
  const delayedOutput = useCallback((lines, baseDelay = 500) => {
    let totalDelay = 0;
    lines.forEach(({ type, text }) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, { type, text }]);
      }, totalDelay);
      totalDelay += baseDelay + text.length * 20; // Adjust per-character delay
    });
  }, []);

  // Boot system on mount
  useEffect(() => {
    setTerminalLines([]); // Reset
    delayedOutput(initialLines);
  }, [delayedOutput]);

  // Handle command execution
  const executeCommand = useCallback((command) => {
    if (!command.trim()) return;

    // Show the prompt line
    setTerminalLines(prev => [...prev, { type: 'prompt', text: command }]);

    // Save command to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(commandHistory.length);

    // Simulate command processing
    processCommand(command, setTerminalLines);
  }, [commandHistory.length]);

  // Clear terminal manually
  const clearTerminal = useCallback(() => {
    setTerminalLines([]);
  }, []);

  return {
    terminalLines,
    executeCommand,
    clearTerminal,
    commandHistory,
    historyIndex,
    setHistoryIndex,
  };
};
