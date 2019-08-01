import styled from 'styled-components/native';
import { View } from 'react-native';

const IconView = styled(View)`
  align-items: center;
  justify-content: center;
  height: 103px;
  width: 103px;
  border-radius: 53px;
  border-width: 3px;
  border-color: #ffffff;
  margin-top: 29.5px;
  margin-bottom: 24px;
  elevation: 5;
  shadow-color: #dbdee4;
  shadow-offset: 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;

export const HappyDisk = styled(IconView)`
  background-color: #55c26f;
`;

export const PokerDisk = styled(IconView)`
  background-color: #ed956a;
`;

export const SadDisk = styled(IconView)`
  background-color: #e36e5b;
`;
