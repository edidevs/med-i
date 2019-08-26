/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ItemView,
  ItemTextView,
  ItemText,
} from '../../StatusScreen/styledComponents';
import { PillIcon } from './styledComponents';

const DrugView = ({ name }) =>
  name ? (
    <TouchableOpacity>
      <ItemView>
        <PillIcon />
        <ItemTextView>
          <ItemText>{name}</ItemText>
        </ItemTextView>
      </ItemView>
    </TouchableOpacity>
  ) : null;

export default DrugView;
