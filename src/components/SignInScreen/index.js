import React from 'react';
import { StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  NavigationView,
  Title,
  SubTitle,
  ItemView,
  UserInput,
  PasswordInput,
  ConfirmButton,
  ConfirmButtonText,
  HyperLinkText,
  RegularText,
} from '../../common/styledComponents';

import { ForgetPasswordText } from './styledComponents';
import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/Images/AuthScreen.png');

const login = async props => {
  await AsyncStorage.setItem('userToken', 'abc');
  handleRoute(props, 'App');
};

const SignInScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <AuthContainer>
      <Title>Login</Title>
      <SubTitle>Username</SubTitle>
      <ItemView rounded>
        <UserInput />
      </ItemView>
      <SubTitle>Password</SubTitle>
      <ItemView rounded>
        <PasswordInput />
      </ItemView>
      <ForgetPasswordText>Forget password?</ForgetPasswordText>
      <ConfirmButton rounded onPress={() => login(props)}>
        <ConfirmButtonText>Log in</ConfirmButtonText>
      </ConfirmButton>
    </AuthContainer>
    <NavigationView>
      <RegularText>Don't have a med-i account ? </RegularText>
      <TouchableOpacity onPress={() => handleRoute(props, 'SignUp1')}>
        <HyperLinkText> Sign Up</HyperLinkText>
      </TouchableOpacity>
    </NavigationView>
  </ImageContainer>
);
export default SignInScreen;
