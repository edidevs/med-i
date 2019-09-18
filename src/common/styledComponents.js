import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

import { screenHeight, screenWidth } from '../utils/deviceSize';

export const CenterView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${screenHeight};
  width: ${screenWidth};
`;

export const NavigationView = styled.View`
  flex-direction: row;
`;

// Only relevant for iOS
export const ShadowView = styled.View`
  shadow-color: #6e7da2;
  shadow-offset: 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;

export const GreetingText = styled.Text`
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 1.16px;
  padding-top: 16px;
`;

export const RegularText = styled.Text`
  font-size: 16px;
  color: #222b45;
`;

export const CircleView = styled.View`
  height: ${props => props.diameter || 55}px;
  width: ${props => props.diameter || 55}px;
  background-color: ${props => props.color || '#f0f1f1'};
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;

export const SeparatorView = styled.View`
  height: 2px;
  width: 316px;
  border: 1px;
  border-color: #e9e9e9;
`;

export const ItemView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 91;
  width: ${screenWidth * 0.9};
  padding: 20px;
  margin-top: 19px;
  margin-bottom: 19px;
  border-radius: 13px;
  background-color: #fafafa;
  shadow-color: #d5d9e6;
  shadow-offset: 0px 8px;
  shadow-opacity: 0.5;
  shadow-radius: 13;
  elevation: 1;
`;

export const ItemViewBis = styled(ItemView)`
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const ItemTextView = styled.View`
  margin-left: 100px;
  position: absolute;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #393c50;
`;

export const ItemMessage = styled.Text`
  font-size: 14;
  color: #393c50;
  margin-top: 16px;
`;

export const BoldText = styled.Text`
  color: #393c50;
  font-size: 20px;
  font-weight: 600;
`;

export const IconView = styled(LinearGradient)`
  height: 188px;
  width: 188px;
  border-radius: 95px;
  border-width: 10px;
  border-color: #ffffff;
  margin-top: 28px;
  align-items: center;
  justify-content: center;
  elevation: 5;
`;

export const ResultsText = styled.Text`
  color: #393c50;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  line-height: 46px;
  letter-spacing: 1.16px;
`;

export const HealthyColors = ['#55C26F', '#5ADF79'];
export const NotWellColors = ['#ED956A', '#F06D2E'];
export const SickColors = ['#E36E5B', '#F0857A'];

export const FaceHeight = 95;
export const FaceWidth = 95;
