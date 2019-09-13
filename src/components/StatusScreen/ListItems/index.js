/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { handleRoute } from '../../../utils/handleRoute';

import {
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
} from '../../../common/styledComponents';

import Body from '../../../../assets/Icons/Body.svg';
import Mind from '../../../../assets/Icons/Mind.svg';
import Device from '../../../../assets/Icons/Device.svg';
import Program from '../../../../assets/Icons/Program.svg';
import Yoga from '../../../../assets/Icons/Yoga.svg';
import Sports from '../../../../assets/Icons/Sports.svg';

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
