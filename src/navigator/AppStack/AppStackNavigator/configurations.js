import HealthyScreen from '../../../components/HealthyScreen';
import SickScreen from '../../../components/SickScreen';
import MindScreen from '../../../components/MindScreen';
import BodyScreen from '../../../components/BodyScreen';
import PainScreen from '../../../components/PainScreen';
import HayfeverScreen from '../../../components/HayfeverScreen';

import { AppTabNavigator } from '../AppTabNavigator';

export const configurations = {
  Tab: {
    screen: AppTabNavigator,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
  },
  Healthy: {
    screen: HealthyScreen,
    navigationOptions: {
      headerTitle: 'Feeling Healthy',
    },
  },
  Sick: {
    screen: SickScreen,
    navigationOptions: () => ({
      headerTitle: 'Feeling Sick',
    }),
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
    navigationOptions: {
      headerTitle: 'Pain',
    },
  },
  Hayfever: {
    screen: HayfeverScreen,
    navigationOptions: {
      headerTitle: 'Hayfever',
    },
  },
};
