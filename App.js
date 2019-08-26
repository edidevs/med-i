import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import SignInScreen from './src/components/SignInScreen';
import SignUpScreen1 from './src/components/SignUpScreen1';
import SignUpScreen2 from './src/components/SignUpScreen2';
import HealthyScreen from './src/components/HealthyScreen';
import SickScreen from './src/components/SickScreen';
import MindScreen from './src/components/MindScreen';
import BodyScreen from './src/components/BodyScreen';
import PainScreen from './src/components/PainScreen';
import HayfeverScreen from './src/components/HayfeverScreen';

import { AppTabNavigator } from './src/navigator/AppStack/AppTabNavigator';

const AppStack = createStackNavigator(
  {
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
  },
  {
    // initialRouteName: 'Hayfever',
    headerLayoutPreset: 'center', // crucial to center header title in android
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTransparent: true,
      headerTitleStyle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 22,
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        paddingLeft: 16,
      },
    },
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp1: SignUpScreen1,
    SignUp2: SignUpScreen2,
  },
  { headerMode: 'none' }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
