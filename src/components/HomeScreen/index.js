import React from 'react';
import { SafeAreaView, AsyncStorage, Button } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';
import {
  TopView,
  BottomView,
  TopLeftView,
  AvatarView,
  CameraIcon,
  GreetingText,
  TopRightView,
  HealthBarView,
  StatusViewWrapper,
  StatusView,
  IconView,
  FaceHeight,
  FaceWidth,
  RegularText,
  InterrogationText,
  HealthyColors,
  HealthySickColors,
  SickColors,
} from './styledComponents';

import HappyFace from './icons/Happy.svg';
import PokerFace from './icons/Poker.svg';
import SadFace from './icons/Sad.svg';
import Cart from './icons/Cart.svg';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/HomeScreen.png');

const logout = async props => {
  await AsyncStorage.clear();
  handleRoute(props, 'AuthLoading');
};

const HomeScreen = props => (
  <ImageContainer source={background}>
    <SafeAreaView>
      <TopView>
        <TopLeftView>
          <AvatarView>
            <CameraIcon />
          </AvatarView>
          <GreetingText>Good morning {'\n'}Laarni</GreetingText>
        </TopLeftView>
        <TopRightView>
          <Cart width={30} height={24} />
        </TopRightView>
      </TopView>
      <BottomView>
        <RegularText>Your latest report</RegularText>
        <HealthBarView />
        <InterrogationText>How are you feeling today ?</InterrogationText>
        <StatusViewWrapper>
          <StatusView>
            <IconView colors={HealthyColors}>
              <HappyFace width={FaceWidth} height={FaceHeight} />
            </IconView>
            <RegularText>Healthy</RegularText>
          </StatusView>
          <StatusView>
            <IconView colors={HealthySickColors}>
              <PokerFace width={FaceWidth} height={FaceHeight} />
            </IconView>
            <RegularText>Healthy/Sick</RegularText>
          </StatusView>
          <StatusView>
            <IconView colors={SickColors}>
              <SadFace width={FaceWidth} height={FaceHeight} />
            </IconView>
            <RegularText>Sick</RegularText>
          </StatusView>
        </StatusViewWrapper>
        <Button title="logout" onPress={() => logout(props)} />
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
