import React from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

import { ForgetPasswordText } from './styledComponents';
import {
  AuthContainer,
  ImageContainer,
  NavigationView,
  Title,
  SubTitle,
  InputView,
  UserInput,
  PasswordInput,
  ConfirmButton,
  ConfirmButtonText,
  HyperLinkText,
  RegularText,
} from '../../common/styledComponents';

import { login, handleRoute } from '../../utils';

const background = require('../../../assets/Images/AuthScreen.png');

const SignInScreen = navigation => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{ alignItems: 'center' }}>
      <AuthContainer>
        <Title>Login</Title>
        <SubTitle>Username</SubTitle>
        <InputView rounded>
          <UserInput />
        </InputView>
        <SubTitle>Password</SubTitle>
        <InputView rounded>
          <PasswordInput />
        </InputView>
        <ForgetPasswordText>Forget password?</ForgetPasswordText>
        <ConfirmButton rounded onPress={() => login(navigation)}>
          <ConfirmButtonText>Log in</ConfirmButtonText>
        </ConfirmButton>
      </AuthContainer>
      <NavigationView>
        <RegularText>Don't have a med-i account ? </RegularText>
        <TouchableOpacity onPress={() => handleRoute(navigation, 'SignUp1')}>
          <HyperLinkText> Sign Up</HyperLinkText>
        </TouchableOpacity>
      </NavigationView>
    </SafeAreaView>
  </ImageContainer>
);
export default SignInScreen;
