import React from 'react';

import { AppTabNavigator } from '../AppTabNavigator';

import {
  NotWellScreen,
  SickScreen,
  MindScreen,
  BodyScreen,
  YogaScreen,
  SportsScreen,
  PainScreen,
  HayfeverScreen,
  ItchinessScreen,
  FeverScreen,
  CoughScreen,
  IndigestionScreen,
  CartHeader,
  HealthyScreen,
} from '../../../components';

const navigationParams = screenName => ({ navigation }) => ({
  headerTitle: screenName,
  headerRight: <CartHeader navigation={navigation} />,
});

export const configurations = {
  Tab: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => {
      {
        const headerParams = { headerTitle: '' };
        if (navigation.state.index === 1) {
          headerParams.headerTitle = 'Cart';
        } else if (navigation.state.index === 2) {
          headerParams.headerTitle = 'More';
        }
        return headerParams;
      }
    },
  },
  Healthy: {
    screen: HealthyScreen,
    navigationOptions: {
      headerTitle: 'Feeling Healthy',
    },
  },
  NotWell: {
    screen: NotWellScreen,
    navigationOptions: {
      headerTitle: 'Not Feeling Well',
    },
  },
  Sick: {
    screen: SickScreen,
    navigationOptions: {
      headerTitle: 'Feeling Sick',
    },
  },
  Mind: {
    screen: MindScreen,
    navigationOptions: {
      headerTitle: 'Mind',
    },
  },
  Body: {
    screen: BodyScreen,
    navigationOptions: {
      headerTitle: 'Body',
    },
  },
  Yoga: {
    screen: YogaScreen,
    navigationOptions: {
      headerTitle: 'Body',
    },
  },
  Sports: {
    screen: SportsScreen,
    navigationOptions: {
      headerTitle: 'Body',
    },
  },
  Pain: {
    screen: PainScreen,
    navigationOptions: navigationParams('Pain'),
  },
  Hayfever: {
    screen: HayfeverScreen,
    navigationOptions: navigationParams('Hayfever'),
  },
  Itchiness: {
    screen: ItchinessScreen,
    navigationOptions: navigationParams('Itchiness'),
  },
  Fever: {
    screen: FeverScreen,
    navigationOptions: navigationParams('Fever'),
  },
  Cough: {
    screen: CoughScreen,
    navigationOptions: navigationParams('Cough'),
  },
  Indigestion: {
    screen: IndigestionScreen,
    navigationOptions: navigationParams('Indigestion'),
  },
};
