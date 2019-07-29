import React from 'react';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';

import { Text } from 'react-native-paper';

import { screenHeight, screenWidth } from '../utils/deviceSize';

const background = require('../../assets/SignInScreen.png');

const SignInScreen = props => (
  <ImageBackground style={styles.imageContainer} source={background}>
    <StatusBar barStyle="light-content" />
    {/* <View>
      <View style={styles.signInContainer} />
      <Text style={{ fontSize: 14, textAlign: 'center' }}>
        Don't have a med-i account ?{' '}
        <Text style={{ color: '#8CCCED', fontWeight: 'bold' }}>Sign up</Text>
      </Text>
    </View> */}
  </ImageBackground>
);
export default SignInScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight,
    width: screenWidth,
  },
  signInContainer: {
    height: 456,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
});
