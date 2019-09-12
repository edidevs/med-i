import React from 'react';
import { StatusBar, TouchableOpacity, SafeAreaView } from 'react-native';

import {
  TopView,
  MiddleView,
  BottomView,
  GreetingText,
  IconView,
  FaceHeight,
  FaceWidth,
  InterrogationText,
} from './styledComponents';

import {
  ImageContainer,
  ShadowView,
  SickColors,
  HealthyColors,
  HealthySickColors,
} from '../../common/styledComponents';

import HappyFace from '../../../assets/Icons/Happy.svg';
import PokerFace from '../../../assets/Icons/Poker.svg';
import SadFace from '../../../assets/Icons/Sad.svg';
import Mascot from '../../../assets/Icons/Mascot.svg';

import { handleRoute } from '../../utils/handleRoute';

const background = require('../../../assets/Images/HomeScreenBis.png');

const HomeScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TopView>
        <Mascot height={105} width={105} />
        <React.Fragment>
          <GreetingText>Hello Laarni</GreetingText>
        </React.Fragment>
      </TopView>
      <MiddleView>
        <InterrogationText>How do you feel today ?</InterrogationText>
      </MiddleView>
      <BottomView>
        <ShadowView>
          <TouchableOpacity onPress={() => handleRoute(props, 'Healthy')}>
            <IconView colors={HealthyColors}>
              <HappyFace width={FaceWidth} height={FaceHeight} />
            </IconView>
          </TouchableOpacity>
        </ShadowView>
        <ShadowView>
          <TouchableOpacity>
            <IconView colors={HealthySickColors}>
              <PokerFace width={FaceWidth} height={FaceHeight} />
            </IconView>
          </TouchableOpacity>
        </ShadowView>
        <ShadowView>
          <TouchableOpacity onPress={() => handleRoute(props, 'Sick')}>
            <IconView colors={SickColors}>
              <SadFace width={FaceWidth} height={FaceHeight} />
            </IconView>
          </TouchableOpacity>
        </ShadowView>
      </BottomView>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
