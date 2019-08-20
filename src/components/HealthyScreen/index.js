import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import {
  ParagraphView,
  StatusView,
  IconView,
  StatusText,
  ResultsText,
  MessageOneText,
  MessageTwoText,
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import { ShadowView, HealthyColors } from '../HomeScreen/styledComponents';

import HappyFace from '../../common/Icons/Happy.svg';
import Yoga from '../../common/Icons/Yoga.svg';
import Sports from '../../common/Icons/Sports.svg';

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
      <ScrollView>
        <ItemView>
          <Yoga />
          <ItemTextView>
            <ItemText>Yoga</ItemText>
            <ItemMessage>Start your practice here</ItemMessage>
          </ItemTextView>
        </ItemView>
        <ItemView>
          <Sports />
          <ItemTextView>
            <ItemText>Exercise</ItemText>
            <ItemMessage>Enroll in classes here</ItemMessage>
          </ItemTextView>
        </ItemView>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default HealthyScreen;
