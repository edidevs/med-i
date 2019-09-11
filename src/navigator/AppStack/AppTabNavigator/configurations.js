/* eslint-disable react/prop-types */
import React from 'react';

import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
} from '@expo/vector-icons';

import HomeScreen from '../../../components/HomeScreen';

import StoreScreen from '../../../components/StoreScreen';
import MoreScreen from '../../../components/MoreScreen';

const iconStyle = tintColor => ({
  fontSize: 40,
  color: tintColor,
});

export const configurations = {
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Home',
      tabBarIcon({ tintColor }) {
        return <Foundation style={iconStyle(tintColor)} name="home" />;
      },
    }),
  },
  Store: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon({ tintColor }) {
        return (
          <MaterialCommunityIcons
            style={iconStyle(tintColor)}
            name="medical-bag"
          />
        );
      },
    },
  },
  More: {
    screen: MoreScreen,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon({ tintColor }) {
        return <Feather style={iconStyle(tintColor)} name="more-horizontal" />;
      },
    },
  },
};
