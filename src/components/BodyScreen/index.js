/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { TitleView, TitleText } from './styledComponents';
import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/Images/BodyScreen.png');

const BodyScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TitleView>
        <TitleText>Tell me how you feel?</TitleText>
      </TitleView>
    </SafeAreaView>
  </ImageContainer>
);
export default BodyScreen;
