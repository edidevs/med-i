import React from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';
import {
  TopView,
  BottomView,
  TopLeftView,
  AvatarView,
  CameraIcon,
  GreetingText,
  TopRightView,
  LogOutIcon,
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
          <LogOutIcon onPress={() => logout(props)} />
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
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
