import React from 'react';
import { StatusBar } from 'react-native';

import { RegularText, WrapperView } from './styledComponents';
import { ImageContainer, SeparatorView } from '../../common/styledComponents';

import { backgroundTabs as background } from '../../utils';

const MoreScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <WrapperView>
      <RegularText>About us</RegularText>
      <SeparatorView />
      <RegularText>Terms and conditions</RegularText>
      <SeparatorView />
      <RegularText>Recommend to friends</RegularText>
      <SeparatorView />
    </WrapperView>
  </ImageContainer>
);

export default MoreScreen;
