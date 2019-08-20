import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import {
  ParagraphView,
  StatusView,
  IconView,
  StatusText,
  ResultsText,
  MessageOneText,
  MessageTwoText,
  ItemView,
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import { ShadowView, HealthyColors } from '../HomeScreen/styledComponents';

import HappyFace from '../../common/Icons/Happy.svg';

const background = require('../../../assets/HealthyScreen.png');

const HealthyScreen = () => (
  <ImageContainer source={background}>
    <SafeAreaView>
      {/* message and icon */}
      <StatusView>
        <StatusText>Healthy Mood</StatusText>
        <ShadowView>
          <IconView colors={HealthyColors}>
            <HappyFace width={95} height={95} />
          </IconView>
        </ShadowView>
      </StatusView>
      {/* paragraph */}
      <ParagraphView>
        <ResultsText>Medi I am well</ResultsText>
        <MessageOneText>Say hello to wellness</MessageOneText>
        <MessageTwoText>A healthy you is a happy you</MessageTwoText>
      </ParagraphView>
      {/* Items */}
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <ItemView>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#393C50' }}>
            Yoga
          </Text>
        </ItemView>
        <ItemView>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#393C50' }}>
            Exercise
          </Text>
        </ItemView>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default HealthyScreen;
