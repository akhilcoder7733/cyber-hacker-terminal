// src/components/Header/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const HeaderContainer = styled(motion.header)`
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 2px solid #00ff00;
  position: relative;
  z-index: 10;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled(motion.div)`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: 900;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  letter-spacing: 2px;
`;

const StatusIndicators = styled.div`
  display: flex;
  gap: 15px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  &.online {
    background-color: #00ff00;
    box-shadow: 0 0 10px #00ff00;
  }
  
  &.warning {
    background-color: #ffff00;
    box-shadow: 0 0 10px #ffff00;
  }
  
  &.error {
    background-color: #ff0040;
    box-shadow: 0 0 10px #ff0040;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 15px;
`;

const Header = ({ onRunExploit, onClear, onDownloadData }) => {
  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderLeft>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          METASPOITABLE v3.0
        </Logo>
        <StatusIndicators>
          <StatusItem>
            <StatusDot className="online" />
            <span>SYSTEM ONLINE</span>
          </StatusItem>
          <StatusItem>
            <StatusDot className="warning" />
            <span>FIREWALL BYPASSED</span>
          </StatusItem>
          <StatusItem>
            <StatusDot className="error" />
            <span>ENCRYPTION CRACKED</span>
          </StatusItem>
        </StatusIndicators>
      </HeaderLeft>
      <HeaderRight>
        <Button onClick={onRunExploit}>RUN EXPLOIT</Button>
        <Button onClick={onClear}>CLEAR</Button>
        <Button onClick={onDownloadData}>EXFILTRATE</Button>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;