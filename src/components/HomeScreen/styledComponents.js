import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const ContainerView = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;

export const TopView = styled.View`
  padding: 24px;
  flex-direction: row;
`;

export const MiddleView = styled.View`
  padding-top: 32px;
  align-items: center;
`;

export const BottomView = styled.View`
  padding-bottom: 24px;
`;

export const GreetingText = styled.Text`
  color: #fff;
  padding-top: 24px;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 1.16px;
`;

export const InterrogationText = styled.Text`
  color: #575772;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.06px;
`;

export const IconView = styled(LinearGradient)`
  height: 113px;
  width: 113px;
  border-radius: 57px;
  border-width: 3px;
  border-color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const FaceHeight = 58;
export const FaceWidth = 58;
