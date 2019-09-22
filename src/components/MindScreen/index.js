/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import {
  MindView,
  LowerView,
  CallButton,
  CallButtonIconView,
  CallButtonText,
  CallButtonIcon,
  MessageText,
  BoldText,
} from './styledComponents';
import {
  ImageContainer,
  ShadowView,
  SickColors,
  ResultsText,
  IconView,
  FaceHeight,
  FaceWidth,
} from '../../common/styledComponents';

import { backgroundSick as background, callNumber } from '../../utils';

import { BigMind } from '../../../assets/Icons';

const MindScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <MindView>
        <ShadowView>
          <IconView colors={SickColors}>
            <BigMind width={FaceWidth} height={FaceHeight} />
          </IconView>
        </ShadowView>
      </MindView>
      <LowerView>
        <ResultsText>Mental Health {'\n'}Crisis</ResultsText>
        <MessageText>
          Call <BoldText>999</BoldText>
        </MessageText>
        <CallButton onPress={() => callNumber()}>
          <CallButtonIconView>
            <CallButtonIcon />
          </CallButtonIconView>
          <CallButtonText>Call Now</CallButtonText>
        </CallButton>
      </LowerView>
    </SafeAreaView>
  </ImageContainer>
);
export default MindScreen;
