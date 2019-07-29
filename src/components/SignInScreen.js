import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  SignInContainer,
  ImageContainer,
  SignInView,
  Title,
  SubTitle,
  ItemView,
  UserInput,
  PasswordInput,
  ForgetPasswordText,
  LogInButton,
  LogInButtonText,
  SignUpText,
  RegularText,
} from './styleComponent';

const background = require('../../assets/SignInScreen.png');

const SignInScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SignInContainer>
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
      <LogInButton rounded>
        <LogInButtonText>Log in</LogInButtonText>
      </LogInButton>
    </SignInContainer>
    <SignInView>
      <RegularText>Don't have a med-i account ? </RegularText>
      <TouchableOpacity>
        <SignUpText> Sign Up</SignUpText>
      </TouchableOpacity>
    </SignInView>
  </ImageContainer>
);
export default SignInScreen;
