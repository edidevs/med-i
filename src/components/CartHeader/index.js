import React from 'react';
import { Alert } from 'react-native';

import { CartHeaderView, BadgeView, BadgeText } from './styledComponents';

import Cart from '../../../assets/Icons/Cart.svg';

const goToCartAlert = navigation => {
  Alert.alert(
    'Go To Cart',
    'Make sure you add few possible items you may need before going to cart.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Proceed',
        onPress: () => navigation.navigate('Store'),
      },
    ],
    { cancelable: false }
  );
};

export const goToCart = navigation => (
  <CartHeaderView onPress={() => goToCartAlert(navigation)}>
    <Cart height={28} width={28} />
    <BadgeView>
      <BadgeText>2</BadgeText>
    </BadgeView>
  </CartHeaderView>
);
