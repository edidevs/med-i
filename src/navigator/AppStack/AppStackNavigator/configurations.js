import React from 'react';

import { AppTab } from '../AppTabNavigator';

import {
  NotWellScreen,
  SickScreen,
  MindScreen,
  BodyScreen,
  PainScreen,
  HayfeverScreen,
  ItchinessScreen,
  FeverScreen,
  CoughScreen,
  IndigestionScreen,
  CartHeader,
  HealthyScreen,
  AboutUsScreen,
  TermsScreen,
} from '../../../components';

const navigationParams = screenName => ({ navigation }) => ({
  headerTitle: screenName,
  headerRight: <CartHeader navigation={navigation} />,
});

export const configurations = {
  Tab: {
    screen: AppTab,
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
  About: {
    screen: AboutUsScreen,
    navigationOptions: {
      headerTitle: 'About us',
    },
  },
  Terms: {
    screen: TermsScreen,
    navigationOptions: {
      headerTitle: 'Terms',
    },
  },
};
