import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import {
  ParagraphView,
  StatusView,
  IconView,
  ResultsText,
  MessageOneText,
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
  FaceHeight,
  FaceWidth,
} from '../HealthyScreen/styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import { ShadowView, SickColors } from '../HomeScreen/styledComponents';

import SadFace from '../../common/Icons/Sad.svg';
import Body from '../../common/Icons/Body.svg';
import Mind from '../../common/Icons/Mind.svg';

const background = require('../../../assets/SickScreen.png');

const SickScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <StatusView>
        <ShadowView>
          <IconView colors={SickColors}>
            <SadFace width={FaceWidth} height={FaceHeight} />
          </IconView>
        </ShadowView>
      </StatusView>
      <ParagraphView>
        <ResultsText>We got you buddy</ResultsText>
        {/* <MessageOneText>We got you buddy</MessageOneText> */}
        <MessageOneText>Is the pain in your</MessageOneText>
      </ParagraphView>
      <ScrollView>
        <ItemView>
          <Mind />
          <ItemTextView>
            <ItemText>Mind</ItemText>
            <ItemMessage>Start your practice here</ItemMessage>
          </ItemTextView>
        </ItemView>
        <ItemView>
          <Body />
          <ItemTextView>
            <ItemText>Body</ItemText>
            <ItemMessage>Enroll in classes here</ItemMessage>
          </ItemTextView>
        </ItemView>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default SickScreen;
