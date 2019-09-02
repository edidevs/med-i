import React from 'react';
import { StatusBar } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/Images/MoreScreen.png');

const MoreScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
  </ImageContainer>
);

export default MoreScreen;
