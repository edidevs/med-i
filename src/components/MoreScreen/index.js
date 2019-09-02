import React from 'react';
import { AsyncStorage, StatusBar, View } from 'react-native';

import { LogOutButton, RegularText, WrapperView } from './styledComponents';

import {
  ImageContainer,
  ConfirmButtonText,
  SeparatorView,
} from '../../common/styledComponents';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/Images/MoreScreen.png');

const logout = async props => {
  await AsyncStorage.clear();
  handleRoute(props, 'AuthLoading');
};

const MoreScreen = props => (
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
        <LogOutButton rounded onPress={() => logout(props)}>
          <ConfirmButtonText>Log out</ConfirmButtonText>
        </LogOutButton>
      </View>
    </WrapperView>
  </ImageContainer>
);

export default MoreScreen;
