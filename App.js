import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './src/components/AuthLoadingScreen';

import { AppStack } from './src/navigator/AppStack/AppStackNavigator';
import { AuthStack } from './src/navigator/AuthStack';

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
