/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
} from '../../../../common/styledComponents';

const ItemList = ({
  handlePress,
  iconName,
  itemText,
  itemMessage,
  notWell,
}) => (
  <TouchableOpacity onPress={handlePress}>
    <ItemView>
      {iconName}
      <ItemTextView>
        <ItemText>{itemText}</ItemText>
        {!notWell && <ItemMessage>{itemMessage}</ItemMessage>}
      </ItemTextView>
    </ItemView>
  </TouchableOpacity>
);
export default ItemList;
