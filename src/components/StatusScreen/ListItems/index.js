/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, TouchableOpacity, Linking } from 'react-native';

import {
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
} from '../../../common/styledComponents';

import {
  Body,
  Mind,
  Device,
  Program,
  Yoga,
  Vegetables,
} from '../../../../assets/Icons';
import {
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  handleRouteCurry,
} from '../../../utils';

const ListItems = ({
  sick,
  notWell,
  itemTextOne,
  itemMessageOne,
  itemTextTwo,
  itemMessageTwo,
  otherProps,
}) => {
  const screenElements = {};
  const goToScreen = route => handleRouteCurry(otherProps)(route);
  const openLink = link => Linking.openURL(link);
  let { itemOne, itemTwo, iconOne, iconTwo } = screenElements;

  if (sick) {
    itemOne = () => goToScreen('Body');
    itemTwo = () => goToScreen('Mind');
    iconOne = <Body />;
    iconTwo = <Mind />;
  } else if (notWell) {
    itemOne = () => openLink(linkThree);
    itemTwo = () => openLink(linkFour);
    iconOne = <Device />;
    iconTwo = <Program />;
  } else {
    itemOne = () => openLink(linkOne);
    itemTwo = () => openLink(linkTwo);
    iconOne = <Yoga />;
    iconTwo = <Vegetables />;
  }
  return (
    <ScrollView>
      <TouchableOpacity onPress={itemOne}>
        <ItemView>
          {iconOne}
          <ItemTextView>
            <ItemText>{itemTextOne}</ItemText>
            <ItemMessage>{itemMessageOne}</ItemMessage>
          </ItemTextView>
        </ItemView>
      </TouchableOpacity>
      <TouchableOpacity onPress={itemTwo}>
        <ItemView>
          {iconTwo}
          <ItemTextView>
            <ItemText>{itemTextTwo}</ItemText>
            <ItemMessage>{itemMessageTwo}</ItemMessage>
          </ItemTextView>
        </ItemView>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ListItems;
