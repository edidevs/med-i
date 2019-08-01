import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import SignInScreen from './src/components/SignInScreen';
import HomeScreen from './src/components/HomeScreen';
import SignUpScreen1 from './src/components/SignUpScreen1';
import SignUpScreen2 from './src/components/SignUpScreen2';

const AppStack = createStackNavigator(
  { Home: HomeScreen },
  { headerMode: 'none' }
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
