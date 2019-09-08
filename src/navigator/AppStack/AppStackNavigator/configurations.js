import { AppTabNavigator } from '../AppTabNavigator';

import HealthyScreen from '../../../components/HealthyScreen';
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

import { goToCart } from '../../../utils/handleRoute';

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
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Pain',
      headerRight: goToCart(navigation),
    }),
  },
  Hayfever: {
    screen: HayfeverScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Hayfever',
      headerRight: goToCart(navigation),
    }),
  },
  Itchiness: {
    screen: ItchinessScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Itchiness',
      headerRight: goToCart(navigation),
    }),
  },
  Fever: {
    screen: FeverScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Fever',
      headerRight: goToCart(navigation),
    }),
  },
  Cough: {
    screen: CoughScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Cough',
      headerRight: goToCart(navigation),
    }),
  },
  Indigestion: {
    screen: IndigestionScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Indigestion',
      headerRight: goToCart(navigation),
    }),
  },
};
