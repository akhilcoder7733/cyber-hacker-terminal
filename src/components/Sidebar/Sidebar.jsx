// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';
import SystemStatus from './SystemStatus';
import TargetInfo from './TargetInfo';
import AttackProgress from './AttackProgress';

const SidebarContainer = styled.aside`
  background-color: #0a0a0a;
  padding: 20px;
  overflow-y: auto;
  border-left: 2px solid #00ff00;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #0a0a0a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #1a1a1a;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #2a2a2a;
  }
`;

const Sidebar = ({ systemStats, attackProgress }) => {
  return (
    <SidebarContainer>
      <SystemStatus systemStats={systemStats} />
      <TargetInfo />
      <AttackProgress attackProgress={attackProgress} />
    </SidebarContainer>
  );
};

export default Sidebar;