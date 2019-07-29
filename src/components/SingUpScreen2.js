import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  SignInView,
  Title,
  SubTitle,
  ItemView,
  PasswordInput,
  DOBInput,
  ConfirmButton,
  LogInButtonText,
  HyperLinkText,
  RegularText,
} from './styleComponent';

const background = require('../../assets/AuthScreen.png');

const SignUpScreen2 = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <AuthContainer>
      <Title>Sing Up</Title>
      <SubTitle>Date of birth</SubTitle>
      <ItemView rounded>
        <DOBInput />
      </ItemView>
      <SubTitle>Password</SubTitle>
      <ItemView rounded>
        <PasswordInput />
      </ItemView>
      <ConfirmButton rounded>
        <LogInButtonText>Next</LogInButtonText>
      </ConfirmButton>
    </AuthContainer>
    <SignInView>
      <RegularText>Already have a med-i account ? </RegularText>
      <TouchableOpacity>
        <HyperLinkText> Log in</HyperLinkText>
      </TouchableOpacity>
    </SignInView>
  </ImageContainer>
);
export default SignUpScreen2;
