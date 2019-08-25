import styled from 'styled-components/native';

import { Input, Button, Item } from 'native-base';

import { screenHeight, screenWidth } from '../utils/deviceSize';

export const CenterView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  height: ${screenHeight};
  width: ${screenWidth};
`;

export const AuthContainer = styled.View`
  width: 350px;
  background-color: #fff;
  border-radius: 25;
  margin-bottom: 83px;
  elevation: 14;
  shadow-color: #9aa0b2;
  shadow-offset: 2px;
  shadow-opacity: 0.8;
  shadow-radius: 22;
  padding-top: 44px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 35px;
`;

export const NavigationView = styled.View`
  flex-direction: row;
  align-items: center;
`;

// Only relevant for iOS
export const ShadowView = styled.View`
  shadow-color: #dbdee4;
  shadow-offset: 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #222b45;
  margin-left: 14px;
`;

export const SubTitle = styled.Text`
  font-size: 16;
  font-weight: 500;
  color: #222b45;
  margin-left: 14px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ItemView = styled(Item)`
  padding-left: 16px;
`;

export const InputField = styled(Input).attrs({
  placeholderTextColor: '#A6A6A6',
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  color: #222b45;
`;

export const UserInput = styled(InputField).attrs({
  placeholder: 'Your username',
  keyboardType: 'default',
  returnKeyType: 'next',
})``;

export const ConfirmButton = styled(Button)`
  background-color: #7adfec;
  align-items: center;
  justify-content: center;
  height: 56px;
  margin-top: 24px;
`;

export const ConfirmButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const HyperLinkText = styled.Text`
  color: #8ccced;
  font-weight: bold;
  font-size: 16px;
`;

export const RegularText = styled.Text`
  font-size: 16px;
  color: #222b45;
`;

export const PasswordInput = styled(Input).attrs({
  placeholder: '********',
  returnKeyType: 'go',
  secureTextEntry: true,
})``;

export const HealthyColors = ['#55C26F', '#5ADF79'];
export const HealthySickColors = ['#ED956A', '#F06D2E'];
export const SickColors = ['#E36E5B', '#F0857A'];
