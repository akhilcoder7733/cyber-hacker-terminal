// src/components/UI/ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #1a1a1a;
  border: 1px solid #00ff00;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00ff00, #00aaff);
  width: ${props => props.value}%;
  transition: width 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const ProgressBar = ({ value }) => {
  return (
    <BarContainer>
      <BarFill value={value} />
    </BarContainer>
  );
};

export default ProgressBar;