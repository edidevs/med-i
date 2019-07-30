import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

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

const background = require('../../../assets/AuthScreen.png');

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
      <ConfirmButton rounded>
        <ConfirmButtonText>Log in</ConfirmButtonText>
      </ConfirmButton>
    </AuthContainer>
    <NavigationView>
      <RegularText>Don't have a med-i account ? </RegularText>
      <TouchableOpacity>
        <HyperLinkText> Sign Up</HyperLinkText>
      </TouchableOpacity>
    </NavigationView>
  </ImageContainer>
);
export default SignInScreen;
