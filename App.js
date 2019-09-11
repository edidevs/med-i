import React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import AuthLoadingScreen from './src/components/AuthLoadingScreen';
import { AppStack } from './src/navigator/AppStack/AppStackNavigator';
import { AuthStack } from './src/navigator/AuthStack';

const AppNavigation = createAppContainer(
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

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppNavigation />
    </PersistGate>
  </Provider>
);
export default App;
