import React from 'react';

import { AppTabNavigator } from '../AppTabNavigator';

import HealthyScreen from '../../../components/HealthyScreen';
import NotWellScreen from '../../../components/NotWellScreen';
import SickScreen from '../../../components/SickScreen';
import MindScreen from '../../../components/MindScreen';
import BodyScreen from '../../../components/BodyScreen';
import YogaScreen from '../../../components/YogaScreen';
import SportsScreen from '../../../components/SportsScreen';
import PainScreen from '../../../components/PainScreen';
import HayfeverScreen from '../../../components/HayfeverScreen';
import ItchinessScreen from '../../../components/ItchinessScreen';
import FeverScreen from '../../../components/FeverScreen';
import CoughScreen from '../../../components/CoughScreen';
import IndigestionScreen from '../../../components/IndigestionScreen';
import CartHeader from '../../../components/CartHeader';

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
