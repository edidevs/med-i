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
  itemMessageOne,
  itemTextTwo,
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
        {!sick && (
          <MessageTwoText notWell={notWell}>{messageTwo}</MessageTwoText>
        )}
      </ParagraphView>
      <ListItems
        sick={sick}
        notWell={notWell}
        itemTextOne={itemTextOne}
        itemTextTwo={itemTextTwo}
        itemMessageOne={itemMessageOne}
        itemMessageTwo={itemMessageTwo}
        otherProps={otherProps}
      />
    </SafeAreaView>
  </ImageContainer>
);
export default withNavigation(StatusScreen);
