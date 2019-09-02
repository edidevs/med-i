/* eslint-disable react/prop-types */
import React from 'react';

import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

import HomeScreen from '../../../components/HomeScreen';

import StoreScreen from '../../../components/StoreScreen';
import MoreScreen from '../../../components/MoreScreen';

export const configurations = {
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarLabel: 'Home',
      tabBarIcon({ tintColor }) {
        return (
          <AntDesign
            style={{
              fontSize: 40,
              color: tintColor,
            }}
            name="home"
          />
        );
      },
    }),
  },
  Store: {
    screen: StoreScreen,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon({ tintColor }) {
        return (
          <EvilIcons
            style={{
              fontSize: 40,
              color: tintColor,
            }}
            name="cart"
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
        return (
          <Feather
            style={{ fontSize: 40, color: tintColor }}
            name="more-horizontal"
          />
        );
      },
    },
  },
};
