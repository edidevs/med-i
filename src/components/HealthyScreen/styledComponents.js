import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const StatusView = styled.View`
  align-items: center;
  bottom: 45%;
`;

export const StatusText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;

export const IconView = styled(LinearGradient)`
  height: 186px;
  width: 186px;
  border-radius: 93px;
  border-width: 8px;
  border-color: #ffffff;
  margin-top: 28px;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const ParagraphView = styled.View`
  align-items: center;
  justify-content: center;
  height: 130;
  justify-content: space-between;
  background-color: grey;
`;

export const ResultsText = styled.Text`
  color: #393c50;
  font-weight: 600;
  font-size: 36px;
`;

export const MessageOneText = styled.Text`
  color: #393c50;
  font-size: 20px;
`;

export const MessageTwoText = styled.Text`
  color: #45cd65;
  font-weight: 500;
  font-size: 20px;
`;
