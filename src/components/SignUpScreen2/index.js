import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  AuthContainer,
  ImageContainer,
  NavigationView,
  Title,
  SubTitle,
  ItemView,
  PasswordInput,
  ConfirmButton,
  ConfirmButtonText,
  HyperLinkText,
  RegularText,
} from '../../common/styledComponents';

import { DOBInput } from './styledComponents';

const background = require('../../../assets/Images/AuthScreen.png');

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
        <ConfirmButtonText>Create account</ConfirmButtonText>
      </ConfirmButton>
    </AuthContainer>
    <NavigationView>
      <RegularText>Already have a med-i account ? </RegularText>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
        <HyperLinkText> Log in</HyperLinkText>
      </TouchableOpacity>
    </NavigationView>
  </ImageContainer>
);
export default SignUpScreen2;
