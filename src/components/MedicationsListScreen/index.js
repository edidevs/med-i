/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/Images/BodyScreen.png');

const MedicationsListScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView></SafeAreaView>
  </ImageContainer>
);

export default MedicationsListScreen;
