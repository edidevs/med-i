/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ItemViewBis } from './styledComponents';
import { ItemTextView, ItemText } from '../../StatusScreen/styledComponents';
import Medicine from '../../../../assets/Icons/medicine.svg';
import { CircleView } from '../../../common/styledComponents';

const DrugView = ({ name }) =>
  name ? (
    <TouchableOpacity>
      <ItemViewBis>
        <CircleView>
          <Medicine />
        </CircleView>
        <ItemTextView>
          <ItemText>{name}</ItemText>
        </ItemTextView>
      </ItemViewBis>
    </TouchableOpacity>
  ) : null;

export default DrugView;
