import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import Cart from '../../assets/Icons/Cart.svg';

export const handleRoute = (props, route) => props.navigation.navigate(route);

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
  <TouchableOpacity
    onPress={() => goToCartAlert(navigation)}
    style={{ paddingRight: 24 }}
  >
    <Cart />
  </TouchableOpacity>
);
