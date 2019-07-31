import styled from 'styled-components/native';
import { View } from 'react-native';

const IconView = styled(View)`
  align-items: center;
  justify-content: center;
  height: 101px;
  width: 101px;
  border-radius: 50px;
  border-width: 3px;
  border-color: #ffffff;
  margin-top: 29.5px;
  margin-bottom: 24px;
  elevation: 14;
  shadow-color: #9aa0b2;
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 20;
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
