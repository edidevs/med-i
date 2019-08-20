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
import Yoga from '../../common/Icons/Yoga.svg';
import Sports from '../../common/Icons/Sports.svg';

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
        <ItemView style={{ flexDirection: 'row' }}>
          <Yoga />
          <View
            style={{
              marginLeft: 16,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#393C50' }}
            >
              Yoga
            </Text>
            <Text style={{ fontSize: 14, color: '#393C50' }}>
              Start your practice here
            </Text>
          </View>
        </ItemView>
        <ItemView style={{ flexDirection: 'row' }}>
          <Sports />
          <View
            style={{
              marginLeft: 16,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#393C50' }}
            >
              Exercise
            </Text>
            <Text style={{ fontSize: 14, color: '#393C50' }}>
              Enroll in classes here
            </Text>
          </View>
        </ItemView>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default HealthyScreen;
