import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  ContainerView,
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
  CenterView,
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
    <ContainerView>
      <TopView>
        <Mascot height={95} width={95} />
        <React.Fragment>
          <GreetingText>Hello Laarni</GreetingText>
        </React.Fragment>
      </TopView>
      <MiddleView>
        <InterrogationText>How do you feel today ?</InterrogationText>
      </MiddleView>
      <BottomView>
        <React.Fragment>
          <CenterView>
            <ShadowView>
              <TouchableOpacity onPress={() => handleRoute(props, 'Healthy')}>
                <IconView colors={HealthyColors}>
                  <HappyFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
          </CenterView>
          <CenterView>
            <ShadowView>
              <TouchableOpacity>
                <IconView colors={HealthySickColors}>
                  <PokerFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
          </CenterView>
          <CenterView>
            <ShadowView>
              <TouchableOpacity onPress={() => handleRoute(props, 'Sick')}>
                <IconView colors={SickColors}>
                  <SadFace width={FaceWidth} height={FaceHeight} />
                </IconView>
              </TouchableOpacity>
            </ShadowView>
          </CenterView>
        </React.Fragment>
      </BottomView>
    </ContainerView>
  </ImageContainer>
);
export default HomeScreen;
