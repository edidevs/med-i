/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import { CartHeaderView, BadgeView, BadgeText } from './styledComponents';

import { goToCartAlert } from '../../utils/handleRoute';

import Cart from '../../../assets/Icons/Cart.svg';

const CartHeader = ({ itemsCount, ...navigation }) => (
  <CartHeaderView onPress={() => goToCartAlert(navigation)}>
    <Cart height={28} width={28} />
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
