import React from 'react';
import { StatusBar } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/Images/MoreScreen.png');

const StoreScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
  </ImageContainer>
);

export default StoreScreen;
