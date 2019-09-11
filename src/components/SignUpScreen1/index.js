import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  NavigationView,
  Title,
  SubTitle,
  InputView,
  UserInput,
  ConfirmButton,
  ConfirmButtonText,
  HyperLinkText,
  RegularText,
} from '../../common/styledComponents';

import { EmailInput } from './styledComponents';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/Images/AuthScreen.png');

const SignUpScreen1 = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <AuthContainer>
      <Title>Sing Up</Title>
      <SubTitle>Username</SubTitle>
      <InputView rounded>
        <UserInput />
      </InputView>
      <SubTitle>Email</SubTitle>
      <InputView rounded>
        <EmailInput />
      </InputView>
      <ConfirmButton rounded onPress={() => handleRoute(props, 'SignUp2')}>
        <ConfirmButtonText>Next</ConfirmButtonText>
      </ConfirmButton>
    </AuthContainer>
    <NavigationView>
      <RegularText>Already have a med-i account ? </RegularText>
      <TouchableOpacity onPress={() => handleRoute(props, 'SignIn')}>
        <HyperLinkText> Log in</HyperLinkText>
      </TouchableOpacity>
    </NavigationView>
  </ImageContainer>
);
export default SignUpScreen1;
