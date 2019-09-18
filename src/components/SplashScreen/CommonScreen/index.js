/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar } from 'react-native';

import { SplashText } from './styledComponents';
import { ImageContainer } from '../../../common/styledComponents';

import { handleRoute } from '../../../utils';

const background = require('../../../../assets/Images/HomeScreen.png');

const CommonScreen = ({ navigation, routeName, content }) => {
  React.useEffect(() => {
    setTimeout(() => handleRoute(navigation, routeName), 2000);
  }, [navigation, routeName]);

  return (
    <ImageContainer source={background}>
      <StatusBar barStyle="default" />
      <SplashText>{content}</SplashText>
    </ImageContainer>
  );
};

export default CommonScreen;
