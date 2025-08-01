// src/components/UI/Button.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  background-color: #1a1a1a;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 8px 16px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: #00ff00;
    color: #000;
    box-shadow: 0 0 10px #00ff00;
  }
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;