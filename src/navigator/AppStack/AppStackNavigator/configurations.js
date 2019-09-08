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

import { AppTabNavigator } from '../AppTabNavigator';

export const configurations = {
  Tab: {
    screen: AppTabNavigator,
    navigationOptions: props => {
      const title = {};
      if (props.navigation.state.index === 1) {
        title.headerTitle = 'Cart';
      } else if (props.navigation.state.index === 2) {
        title.headerTitle = 'More';
      }
      return title;
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
  Itchiness: {
    screen: ItchinessScreen,
    navigationOptions: {
      headerTitle: 'Itchiness',
    },
  },
  Fever: {
    screen: FeverScreen,
    navigationOptions: {
      headerTitle: 'Fever',
    },
  },
  Cough: {
    screen: CoughScreen,
    navigationOptions: {
      headerTitle: 'Cough',
    },
  },
  Indigestion: {
    screen: IndigestionScreen,
    navigationOptions: {
      headerTitle: 'Indigestion',
    },
  },
};
