/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import { CartHeaderView, BadgeView, BadgeText } from './styledComponents';

import { goToCartAlert } from '../../utils/handleRoute';

import Cart from '../../../assets/Icons/Cart.svg';

const CartHeader = ({ numberOfItemsInCart, ...navigation }) => (
  <CartHeaderView onPress={() => goToCartAlert(navigation)}>
    <Cart height={28} width={28} />
    <BadgeView>
      <BadgeText>{numberOfItemsInCart}</BadgeText>
    </BadgeView>
  </CartHeaderView>
);

const mapStateToProps = state => ({
  numberOfItemsInCart: state.cart.cartItems.length,
});

export default connect(mapStateToProps)(CartHeader);
