import React from 'react';

import { connect } from 'react-redux';

import { CartHeaderView, BadgeView, BadgeText } from './styledComponents';

import { goToCartAlert } from '../../utils/handleRoute';

import Cart from '../../../assets/Icons/Cart.svg';

const CartHeader = navigation => (
  <CartHeaderView onPress={() => goToCartAlert(navigation)}>
    <Cart height={28} width={28} />
    <BadgeView>
      <BadgeText>3</BadgeText>
    </BadgeView>
  </CartHeaderView>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartHeader);
