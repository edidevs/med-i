/* eslint-disable react/prop-types */
import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { Feather, EvilIcons, AntDesign } from '@expo/vector-icons';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import SignInScreen from './src/components/SignInScreen';
import HomeScreen from './src/components/HomeScreen';
import SignUpScreen1 from './src/components/SignUpScreen1';
import SignUpScreen2 from './src/components/SignUpScreen2';
import StoreScreen from './src/components/StoreScreen';
import MoreScreen from './src/components/MoreScreen';
import HealthyScreen from './src/components/HealthyScreen';
import SickScreen from './src/components/SickScreen';
import MindScreen from './src/components/MindScreen';
import BodyScreen from './src/components/BodyScreen';

const options = {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarVisible: true,
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#1EB9CD',
    inactiveTintColor: '#33395F',
    borderTopWidth: 0,
    style: {
      backgroundColor: '#fff',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      shadowColor: 'rgba(210,211,215,0.5)',
      elevation: 20,
    },
    labelStyle: {
      fontSize: 12,
    },
    iconStyle: {
      height: 40,
      width: 40,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  },
};

const configurations = {
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
      tabBarLabel: 'Store',
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
      tabBarLabel: 'Store',
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

const AppTabNavigator = createMaterialTopTabNavigator(configurations, options);

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
        headerTitle: 'Mind',
      },
    },
  },
  {
    // initialRouteName: 'Sick',
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
