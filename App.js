import React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import { AppStack } from './src/navigator/AppStack/AppStackNavigator';
import { SplashScreen } from './src/components';

const AppNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
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
