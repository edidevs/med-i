/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { handleRoute } from '../../../utils';

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
  Sports,
} from '../../../../assets/Icons';

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
  let { itemOne, itemTwo, iconOne, iconTwo } = screenElements;
  if (sick) {
    itemOne = 'Body';
    itemTwo = 'Mind';
    iconOne = <Body />;
    iconTwo = <Mind />;
  } else if (notWell) {
    itemOne = 'Device';
    itemTwo = 'Program';
    iconOne = <Device />;
    iconTwo = <Program />;
  } else {
    itemOne = 'Yoga';
    itemTwo = 'Sports';
    iconOne = <Yoga />;
    iconTwo = <Sports />;
  }
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => handleRoute(otherProps, itemOne)}>
        <ItemView>
          {iconOne}
          <ItemTextView>
            <ItemText>{itemTextOne}</ItemText>
            <ItemMessage>{itemMessageOne}</ItemMessage>
          </ItemTextView>
        </ItemView>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRoute(otherProps, itemTwo)}>
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
