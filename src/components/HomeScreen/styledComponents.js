import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { screenWidth } from '../../utils/deviceSize';

console.log(screenWidth);

export const TopView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
`;

export const MiddleView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const BottomViewContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  /* Make an exception for iphone SE */
  width: ${screenWidth > 320 ? screenWidth * 0.88 : screenWidth}px;
`;

export const InterrogationText = styled.Text`
  color: #575772;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.06px;
`;

export const IconView = styled(LinearGradient)`
  height: 106px;
  width: 106px;
  border-radius: 53px;
  border-width: 3px;
  border-color: #ffffff;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const FaceHeight = 58;
export const FaceWidth = 58;
