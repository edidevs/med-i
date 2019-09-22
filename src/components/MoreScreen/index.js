/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import { RegularText, WrapperView } from './styledComponents';
import { ImageContainer, SeparatorView } from '../../common/styledComponents';

import { backgroundTabs as background, handleRoute } from '../../utils';

const MoreScreen = ({ ...navigation }) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <WrapperView>
      <TouchableOpacity onPress={() => handleRoute(navigation, 'About')}>
        <RegularText>About us</RegularText>
      </TouchableOpacity>
      <SeparatorView />
      <TouchableOpacity onPress={() => handleRoute(navigation, 'Terms')}>
        <RegularText>Terms and conditions</RegularText>
      </TouchableOpacity>
      <SeparatorView />
    </WrapperView>
  </ImageContainer>
);

export default MoreScreen;
