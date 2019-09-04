/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { ItemViewBis } from './styledComponents';
import { CircleView } from '../../../common/styledComponents';
import { ItemTextView, ItemText } from '../../StatusScreen/styledComponents';

import Medicine from '../../../../assets/Icons/medicine.svg';

import { handleRoute } from '../../../utils/handleRoute';

const DrugView = ({ name, ...otherProps }) =>
  name ? (
    <TouchableOpacity
      onPress={() => handleRoute(otherProps, 'MedicationsList')}
    >
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

export default withNavigation(DrugView);
