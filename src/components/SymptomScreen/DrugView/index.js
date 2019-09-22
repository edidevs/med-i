/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { addItemToCart } from '../../../redux/cartActions';

import { AddIcon } from './styledComponents';
import {
  CircleView,
  ItemViewBis,
  ItemTextView,
  ItemText,
} from '../../../common/styledComponents';

import { Medicine } from '../../../../assets/Icons';

const Medication = ({ addItem, itemName }) => (
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
);

const DrugView = ({ addItem, itemName }) =>
  itemName ? <Medication addItem={addItem} itemName={itemName} /> : null;

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(DrugView));
