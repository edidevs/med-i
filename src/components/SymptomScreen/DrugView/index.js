/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { ItemViewBis, AddIcon } from './styledComponents';
import { CircleView } from '../../../common/styledComponents';
import { ItemTextView, ItemText } from '../../StatusScreen/styledComponents';

import Medicine from '../../../../assets/Icons/medicine.svg';

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
        <AddIcon />
      </ItemViewBis>
    </TouchableOpacity>
  ) : null;

export default withNavigation(DrugView);
