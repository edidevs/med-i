import React from 'react';
import { StatusBar, View } from 'react-native';

import { LogOutButton, RegularText, WrapperView } from './styledComponents';
import {
  ImageContainer,
  ConfirmButtonText,
  SeparatorView,
} from '../../common/styledComponents';

import { backgroundTabs as background, logout } from '../../utils';

const MoreScreen = navigation => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <WrapperView>
      <View>
        <RegularText>About us</RegularText>
        <SeparatorView />
        <RegularText>Terms and conditions</RegularText>
        <SeparatorView />
        <RegularText>Recommend to friends</RegularText>
        <SeparatorView />
      </View>
      <View>
        <LogOutButton rounded onPress={() => logout(navigation)}>
          <ConfirmButtonText>Log out</ConfirmButtonText>
        </LogOutButton>
      </View>
    </WrapperView>
  </ImageContainer>
);

export default MoreScreen;
