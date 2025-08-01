// src/components/Sidebar/AttackProgress.jsx
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
  font-size: 11px;
  line-height: 1.8;
  margin-top: 10px;
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

const AttackProgress = ({ attackProgress }) => {
  return (
    <Section>
      <Title>Attack Progress</Title>
      <ProgressBar value={attackProgress} />
      <InfoContainer>
        <InfoRow>
          <InfoLabel>Phase:</InfoLabel>
          <InfoValue>Privilege Escalation</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>ETA:</InfoLabel>
          <InfoValue>00:02:34</InfoValue>
        </InfoRow>
      </InfoContainer>
    </Section>
  );
};

export default AttackProgress;