import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  SignInView,
  Title,
  SubTitle,
  ItemView,
  UserInput,
  EmailInput,
  ConfirmButton,
  LogInButtonText,
  HyperLinkText,
  RegularText,
} from './styleComponent';

const background = require('../../assets/AuthScreen.png');

const SignUpScreen1 = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <AuthContainer>
      <Title>Sing Up</Title>
      <SubTitle>Username</SubTitle>
      <ItemView rounded>
        <UserInput />
      </ItemView>
      <SubTitle>Email</SubTitle>
      <ItemView rounded>
        <EmailInput />
      </ItemView>
      <ConfirmButton rounded>
        {/* TODO: navigate to sign up 2 */}
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
export default SignUpScreen1;
