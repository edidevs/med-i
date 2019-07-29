import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';

import { Text } from 'react-native-paper';

import { SignInContainer, ImageContainer } from './styleComponent';

const background = require('../../assets/SignInScreen.png');

const SignInScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SignInContainer />
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 16 }}>Don't have a med-i account ? </Text>
      <TouchableOpacity>
        <Text style={{ color: '#8CCCED', fontWeight: 'bold', fontSize: 16 }}>
          {' '}
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  </ImageContainer>
);
export default SignInScreen;
