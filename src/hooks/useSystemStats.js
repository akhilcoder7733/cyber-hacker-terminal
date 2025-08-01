// src/hooks/useSystemStats.js
import { useState, useEffect } from 'react';

export const useSystemStats = () => {
  const [systemStats, setSystemStats] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    threads: 0,
  });
  
  const [attackProgress, setAttackProgress] = useState(45);

  // Update system stats periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats({
        cpu: Math.floor(Math.random() * 40 + 30),
        memory: Math.floor(Math.random() * 2000 + 1000),
        network: (Math.random() * 100 + 50).toFixed(1),
        threads: Math.floor(Math.random() * 50 + 10),
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { systemStats, attackProgress, setAttackProgress };
};