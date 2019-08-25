/* eslint-disable react/prop-types */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

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

import { ImageContainer, ShadowView } from '../../common/styledComponents';
import { handleRoute } from '../../utils/handleRoute';

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
  ...otherProps
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
        <TouchableOpacity onPress={() => handleRoute(otherProps, 'Mind')}>
          <ItemView>
            {sick ? <Mind /> : <Yoga />}
            <ItemTextView>
              <ItemText>{itemTextOne}</ItemText>
              <ItemMessage>{itemMessageOne}</ItemMessage>
            </ItemTextView>
          </ItemView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRoute(otherProps, 'Body')}>
          <ItemView>
            {sick ? <Body /> : <Sports />}
            <ItemTextView>
              <ItemText>{itemTextTwo}</ItemText>
              <ItemMessage>{itemMessageTwo}</ItemMessage>
            </ItemTextView>
          </ItemView>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  </ImageContainer>
);
export default withNavigation(StatusScreen);
