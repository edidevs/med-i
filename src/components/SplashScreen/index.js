/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { WrapperView } from './styledComponents';
import { handleRoute } from '../../utils';

const SplashScreen = navigation => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleRoute(navigation, 'App');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <WrapperView>
      <StatusBar barStyle="default" />
      <ActivityIndicator color="#E36E5B" size="large" />
    </WrapperView>
  );
};

export default SplashScreen;
