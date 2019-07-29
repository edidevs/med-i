import styled from 'styled-components/native';
import { View, ImageBackground, Text } from 'react-native';

import { Input, Button, Item } from 'native-base';

import { screenHeight, screenWidth } from '../utils/deviceSize';

export const ImageContainer = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${screenHeight};
  width: ${screenWidth};
`;

export const SignInContainer = styled(View)`
  width: 350px;
  background-color: #fff;
  border-radius: 25;
  margin-bottom: 83px;
  shadow-opacity: 0.8;
  shadow-radius: 22;
  elevation: 14;
  shadow-color: #9aa0b2;
  shadow-offset: 2px;
  padding-top: 44px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 35px;
`;

export const SignInView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #222b45;
  margin-left: 14px;
`;

export const SubTitle = styled(Text)`
  font-size: 16;
  font-weight: 500;
  color: #222b45;
  margin-left: 14px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ItemView = styled(Item)`
  padding-left: 24px;
`;

// TODO: make a common component and inherit it.
export const UserInput = styled(Input).attrs({
  placeholder: 'Your username',
  placeholderTextColor: '#A6A6A6',
  keyboardType: 'email-address',
  returnKeyType: 'next',
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  color: #222b45;
`;

export const PasswordInput = styled(Input).attrs({
  placeholder: '********',
  placeholderTextColor: '#A6A6A6',
  returnKeyType: 'go',
  autoCapitalize: 'none',
  autoCorrect: false,
  secureTextEntry: true,
})`
  color: #222b45;
`;

export const ForgetPasswordText = styled(Text)`
  font-size: 14;
  font-weight: 500;
  color: #686d7d;
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export const LogInButton = styled(Button)`
  background-color: #7adfec;
  align-items: center;
  justify-content: center;
  height: 56px;
`;

export const LogInButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const SignUpText = styled(Text)`
  color: #8ccced;
  font-weight: bold;
  font-size: 16px;
`;

export const RegularText = styled(Text)`
  font-size: 16px;
  color: #222b45;
`;
