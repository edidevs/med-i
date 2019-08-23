import React from 'react';
import {
  SafeAreaView,
  AsyncStorage,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

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
  ShadowView,
  FaceHeight,
  FaceWidth,
  RegularText,
  InterrogationText,
  HealthyColors,
  HealthySickColors,
  SickColors,
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import HappyFace from '../../../assets/Icons/Happy.svg';
import PokerFace from '../../../assets/Icons/Poker.svg';
import SadFace from '../../../assets/Icons/Sad.svg';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/Images/HomeScreen.png');

const logout = async props => {
  await AsyncStorage.clear();
  handleRoute(props, 'AuthLoading');
};

const HomeScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
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
            <ShadowView>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Healthy')}
              >
                <IconView colors={HealthyColors}>
                  <HappyFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
            <RegularText>Healthy</RegularText>
          </StatusView>
          <StatusView>
            <ShadowView>
              <TouchableOpacity>
                <IconView colors={HealthySickColors}>
                  <PokerFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
            <RegularText>Healthy/Sick</RegularText>
          </StatusView>
          <StatusView>
            <ShadowView>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Sick')}
              >
                <IconView colors={SickColors}>
                  <SadFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
            <RegularText>Sick</RegularText>
          </StatusView>
        </StatusViewWrapper>
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
