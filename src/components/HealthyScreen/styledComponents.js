import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { screenWidth } from '../../utils/deviceSize';

export const StatusView = styled.View`
  align-items: center;
  /* bottom: 45%; */
`;

export const StatusText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 22px;
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
  margin-top: 10px;
  align-items: center;
  height: 130;
  justify-content: space-between;
`;

export const ResultsText = styled.Text`
  color: #393c50;
  font-weight: 600;
  font-size: 36px;
`;

export const MessageOneText = styled.Text`
  color: #393c50;
  font-size: 22px;
`;

export const MessageTwoText = styled.Text`
  color: #45cd65;
  font-weight: 400;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ItemView = styled.View`
  height: 91;
  width: ${screenWidth * 0.9};
  padding: 20px;
  margin-top: 19px;
  margin-bottom: 19px;
  border-radius: 13px;
  background-color: #fff;
  shadow-color: #d5d9e6;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.5;
  shadow-radius: 13;
  elevation: 0.8;
`;
