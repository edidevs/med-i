/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';

import { SplashText } from '../CommonScreen/styledComponents';
import { ImageContainer } from '../../../common/styledComponents';

import { handleRoute } from '../../../utils';

const background = require('../../../../assets/Images/HomeScreen.png');

const SplashScreen = navigation => {
  React.useEffect(() => {
    setTimeout(() => handleRoute(navigation, 'SplashTwo'), 3000);
  }, [navigation]);

  return (
    <ImageContainer source={background}>
      <StatusBar barStyle="default" />
      <SplashText>Hi, I am Med-i{'\n'}Your health app assistant</SplashText>
    </ImageContainer>
  );
};

export default SplashScreen;
