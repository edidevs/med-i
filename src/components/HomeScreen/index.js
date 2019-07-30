import React from 'react';
import { Text } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/HomeScreen.png');

const HomeScreen = props => (
  <ImageContainer source={background}>
    <Text>HomeScreen</Text>
  </ImageContainer>
);
export default HomeScreen;
