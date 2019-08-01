import React from 'react';
import { SafeAreaView } from 'react-native';

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
  HappyDisk,
  PokerDisk,
  SadDisk,
  RegularText,
  InterrogationText,
} from './styledComponents';
import HappyFace from './icons/Happy.svg';
import PokerFace from './icons/Poker.svg';
import SadFace from './icons/Sad.svg';
import Cart from './icons/Cart.svg';

const background = require('../../../assets/HomeScreen.png');

const scale = 52;

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
            <HappyDisk>
              <HappyFace width={scale} height={scale} />
            </HappyDisk>
            <RegularText>Healthy</RegularText>
          </StatusView>
          <StatusView>
            <PokerDisk>
              <PokerFace width={scale} height={scale} />
            </PokerDisk>
            <RegularText>Healthy/Sick</RegularText>
          </StatusView>
          <StatusView>
            <SadDisk>
              <SadFace width={scale} height={scale} />
            </SadDisk>
            <RegularText>Sick</RegularText>
          </StatusView>
        </StatusViewWrapper>
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
