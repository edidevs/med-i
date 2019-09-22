/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import {
  CartHeaderView,
  CartIcon,
  BadgeView,
  BadgeText,
} from './styledComponents';

import { goToCartAlert } from '../../utils';

const CartHeader = ({ itemsCount, ...navigation }) => (
  <CartHeaderView onPress={() => goToCartAlert(navigation)}>
    <CartIcon />
    <BadgeView>
      <BadgeText>{itemsCount}</BadgeText>
    </BadgeView>
  </CartHeaderView>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemsCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(CartHeader);
