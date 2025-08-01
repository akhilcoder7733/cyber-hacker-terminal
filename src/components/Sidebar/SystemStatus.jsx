// src/components/Sidebar/SystemStatus.jsx
import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../UI/ProgressBar';

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #00aaff;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #00ff00;
  padding-bottom: 5px;
`;

const InfoContainer = styled.div`
  font-size: 12px;
  line-height: 1.8;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const InfoLabel = styled.span`
  color: #008800;
`;

const InfoValue = styled.span`
  color: #00ff00;
`;

const SystemStatus = ({ systemStats }) => {
  return (
    <Section>
      <Title>System Status</Title>
      <InfoContainer>
        <InfoRow>
          <InfoLabel>CPU Usage:</InfoLabel>
          <InfoValue>{systemStats.cpu}%</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Memory:</InfoLabel>
          <InfoValue>{systemStats.memory} MB</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Network:</InfoLabel>
          <InfoValue>{systemStats.network} Mbps</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Threads:</InfoLabel>
          <InfoValue>{systemStats.threads}</InfoValue>
        </InfoRow>
      </InfoContainer>
      <ProgressBar value={systemStats.cpu} />
    </Section>
  );
};

export default SystemStatus;
