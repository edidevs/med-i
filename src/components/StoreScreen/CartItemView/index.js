/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { RemoveIcon } from './styledComponents';
import { ItemViewBis } from '../../SymptomScreen/DrugView/styledComponents';
import { CircleView } from '../../../common/styledComponents';
import { ItemTextView, ItemText } from '../../StatusScreen/styledComponents';
import { removeItemFromCart } from '../../../redux/cartActions';

import Medicine from '../../../../assets/Icons/medicine.svg';

const CartItemView = ({ item, removeItem }) => (
  <ItemViewBis>
    <CircleView>
      <Medicine />
    </CircleView>
    <ItemTextView>
      <ItemText>{item.itemName}</ItemText>
    </ItemTextView>
    <TouchableOpacity onPress={() => removeItem(item)}>
      <RemoveIcon />
    </TouchableOpacity>
  </ItemViewBis>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CartItemView);
