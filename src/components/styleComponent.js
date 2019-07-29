import styled from 'styled-components/native';
import { View, ImageBackground } from 'react-native';

import { screenHeight, screenWidth } from '../utils/deviceSize';

export const ImageContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${screenHeight};
  width: ${screenWidth};
`;

export const SignInContainer = styled(View)`
  height: 456px;
  width: 350px;
  background-color: #fff;
  border-radius: 25;
  margin-bottom: 83px;
  shadow-opacity: 0.8;
  shadow-radius: 22;
  elevation: 14;
  shadow-color: #9aa0b2;
  shadow-offset: 2px;
`;
