import React from 'react';
import { StatusBar } from 'react-native';

import { connect } from 'react-redux';

import { ImageContainer } from '../../common/styledComponents';

const background = require('../../../assets/Images/MoreScreen.png');

const StoreScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
  </ImageContainer>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(StoreScreen);
