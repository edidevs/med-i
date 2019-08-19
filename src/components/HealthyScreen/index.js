import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  ParagraphView,
  StatusView,
  IconView,
  StatusText,
  ResultsText,
  MessageOneText,
  MessageTwoText,
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import { ShadowView, HealthyColors } from '../HomeScreen/styledComponents';

import HappyFace from '../../common/Icons/Happy.svg';

const background = require('../../../assets/HealthyScreen.png');

const HealthyScreen = () => (
  <ImageContainer source={background}>
    <SafeAreaView>
      <StatusView>
        <StatusText>Healthy Mood</StatusText>
        <ShadowView>
          <IconView colors={HealthyColors}>
            <HappyFace width={95} height={95} />
          </IconView>
        </ShadowView>
      </StatusView>
      <ParagraphView>
        <ResultsText>Medi I am well</ResultsText>
        <MessageOneText>Say hello to wellness</MessageOneText>
        <MessageTwoText>A healthy you is a happy you</MessageTwoText>
      </ParagraphView>
    </SafeAreaView>
  </ImageContainer>
);
export default HealthyScreen;
