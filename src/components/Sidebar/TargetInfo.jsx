// src/components/Sidebar/TargetInfo.jsx
import React from 'react';
import styled from 'styled-components';

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

const ErrorText = styled.span`
  color: #ff0040;
`;

const TargetInfo = () => {
  return (
    <Section>
      <Title>Target Info</Title>
      <InfoContainer>
        <InfoRow>
          <InfoLabel>IP Address:</InfoLabel>
          <InfoValue>192.168.1.100</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>OS:</InfoLabel>
          <InfoValue>Linux 5.4.0</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Ports:</InfoLabel>
          <InfoValue>22, 80, 443</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Vulns:</InfoLabel>
          <ErrorText>3 Critical</ErrorText>
        </InfoRow>
      </InfoContainer>
    </Section>
  );
};

export default TargetInfo;