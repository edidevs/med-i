/* eslint-disable react/prop-types */
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
} from './styledComponents';

import { ImageContainer } from '../../common/styledComponents';
import { ShadowView } from '../HomeScreen/styledComponents';

import SadFace from '../../../assets/Icons/Sad.svg';
import Body from '../../../assets/Icons/Body.svg';
import Mind from '../../../assets/Icons/Mind.svg';
import HappyFace from '../../../assets/Icons/Happy.svg';
import Yoga from '../../../assets/Icons/Yoga.svg';
import Sports from '../../../assets/Icons/Sports.svg';

const StatusScreen = ({
  sick,
  background,
  colors,
  resultsText,
  messageOne,
  messageTwo,
  itemTextOne,
  itemMessageOne,
  itemTextTwo,
  itemMessageTwo,
}) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <StatusView>
        <ShadowView>
          <IconView colors={colors}>
            {sick ? (
              <SadFace width={FaceWidth} height={FaceHeight} />
            ) : (
              <HappyFace width={FaceWidth} height={FaceHeight} />
            )}
          </IconView>
        </ShadowView>
      </StatusView>
      <ParagraphView>
        <ResultsText>{resultsText}</ResultsText>
        <MessageOneText>{messageOne}</MessageOneText>
        <MessageOneText>{messageTwo}</MessageOneText>
      </ParagraphView>
      <ScrollView>
        <ItemView>
          {sick ? <Mind /> : <Yoga />}
          <ItemTextView>
            <ItemText>{itemTextOne}</ItemText>
            <ItemMessage>{itemMessageOne}</ItemMessage>
          </ItemTextView>
        </ItemView>
        <ItemView>
          {sick ? <Body /> : <Sports />}
          <ItemTextView>
            <ItemText>{itemTextTwo}</ItemText>
            <ItemMessage>{itemMessageTwo}</ItemMessage>
          </ItemTextView>
        </ItemView>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default StatusScreen;
