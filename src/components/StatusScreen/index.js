/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

import StatusFace from './StatusFace';
import ListItems from './ListItems';

import {
  ParagraphView,
  MessageOneText,
  MessageTwoText,
} from './styledComponents';
import { ImageContainer, ResultsText } from '../../common/styledComponents';

const StatusScreen = ({
  sick,
  notWell,
  background,
  colors,
  resultsText,
  messageOne,
  messageTwo,
  itemTextOne,
  itemTextTwo,
  itemTextThree,
  itemTextFour,
  itemMessageOne,
  itemMessageTwo,
  ...otherProps
}) => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <StatusFace colors={colors} sick={sick} notWell={notWell} />
      <ParagraphView>
        <ResultsText>{resultsText}</ResultsText>
        <MessageOneText>{messageOne}</MessageOneText>
        <MessageTwoText notWell={notWell} sick={sick}>
          {messageTwo}
        </MessageTwoText>
      </ParagraphView>
      <ListItems
        sick={sick}
        notWell={notWell}
        itemTextOne={itemTextOne}
        itemTextTwo={itemTextTwo}
        itemTextThree={itemTextThree}
        itemTextFour={itemTextFour}
        itemMessageOne={itemMessageOne}
        itemMessageTwo={itemMessageTwo}
        otherProps={otherProps}
      />
    </SafeAreaView>
  </ImageContainer>
);
export default withNavigation(StatusScreen);
