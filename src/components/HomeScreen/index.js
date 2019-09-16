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
  NotWellColors,
} from '../../common/styledComponents';

import { HappyFace, PokerFace, SadFace, Mascot } from '../../../assets/Icons';

import { handleRoute } from '../../utils';

const background = require('../../../assets/Images/HomeScreenBis.png');

const HomeScreen = props => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TopView>
        <Mascot height={105} width={105} />
        <React.Fragment>
          <GreetingText>Good Day To You</GreetingText>
        </React.Fragment>
      </TopView>
      <MiddleView>
        <InterrogationText>How Do You Feel Today ?</InterrogationText>
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
          <TouchableOpacity onPress={() => handleRoute(props, 'NotWell')}>
            <IconView colors={NotWellColors}>
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
