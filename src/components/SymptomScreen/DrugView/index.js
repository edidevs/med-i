/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ItemView,
  ItemTextView,
  ItemText,
} from '../../StatusScreen/styledComponents';
import Medicine from '../../../../assets/Icons/medicine.svg';
import { CircleView } from '../../../common/styledComponents';

const DrugView = ({ name }) =>
  name ? (
    <TouchableOpacity>
      <ItemView>
        <CircleView>
          <Medicine />
        </CircleView>
        <ItemTextView>
          <ItemText>{name}</ItemText>
        </ItemTextView>
      </ItemView>
    </TouchableOpacity>
  ) : null;

export default DrugView;
