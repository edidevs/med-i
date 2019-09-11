/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { AddIcon } from './styledComponents';
import {
  CircleView,
  ItemViewBis,
  ItemTextView,
  ItemText,
} from '../../../common/styledComponents';
import { addItemToCart } from '../../../redux/cartActions';

import Medicine from '../../../../assets/Icons/medicine.svg';

const DrugView = ({ addItem, itemName }) =>
  itemName ? (
    <ItemViewBis>
      <CircleView>
        <Medicine />
      </CircleView>
      <ItemTextView>
        <ItemText>{itemName}</ItemText>
      </ItemTextView>
      <TouchableOpacity onPress={() => addItem({ itemName })}>
        <AddIcon />
      </TouchableOpacity>
    </ItemViewBis>
  ) : null;

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(DrugView));
