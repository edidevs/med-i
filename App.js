import React from 'react';

import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import { AppStack } from './src/navigator/AppStack/AppStackNavigator';
import { FirstSplash, SecondSplash, ThirdSplash } from './src/components';

const AppNavigation = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      SplashOne: FirstSplash,
      SplashTwo: SecondSplash,
      SplashThree: ThirdSplash,
      App: AppStack,
    },
    {
      initialRouteName: 'SplashOne',
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
