/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ItemView,
  ItemTextView,
  ItemText,
  ItemMessage,
} from '../../../../common/styledComponents';

const ItemList = ({ handlePress, iconName, itemText, itemMessage }) => (
  <TouchableOpacity onPress={handlePress}>
    <ItemView>
      {iconName}
      <ItemTextView>
        <ItemText>{itemText}</ItemText>
        <ItemMessage>{itemMessage}</ItemMessage>
      </ItemTextView>
    </ItemView>
  </TouchableOpacity>
);
export default ItemList;
