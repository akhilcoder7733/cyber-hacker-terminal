// src/components/BottomPanel/BottomPanel.jsx
import React from 'react';
import styled from 'styled-components';
import DataStream from './DataStream';

const PanelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background-color: #00ff00;
`;

const BottomPanel = () => {
  return (
    <PanelContainer>
      <DataStream title="Network Traffic" type="network" />
      <DataStream title="Memory Dump" type="memory" />
      <DataStream title="Encryption Keys" type="keys" />
    </PanelContainer>
  );
};

export default BottomPanel;