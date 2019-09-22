/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, Animated } from 'react-native';

import { SplashText } from './styledComponents';
import { ImageContainer } from '../../../common/styledComponents';

import { handleRoute } from '../../../utils';

const background = require('../../../../assets/Images/HomeScreen.png');

const CommonScreen = ({ navigation, routeName, content }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = useCallback(
    () =>
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
      }).start(),
    [fadeAnim]
  );

  useEffect(() => {
    fadeIn();
    const timer = setTimeout(() => handleRoute(navigation, routeName), 3000);
    return () => clearTimeout(timer);
  }, [fadeIn, navigation, routeName]);

  return (
    <ImageContainer source={background}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={{ opacity: fadeAnim }}>
        <SplashText>{content}</SplashText>
      </Animated.View>
    </ImageContainer>
  );
};

export default CommonScreen;
