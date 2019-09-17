/* eslint-disable react/prop-types */
import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { WrapperView } from './styledComponents';

const AuthLoadingScreen = props => {
  React.useEffect(() => {
    props.navigation.navigate('App');
  });

  return (
    <WrapperView>
      <StatusBar barStyle="default" />
      <ActivityIndicator color="#E36E5B" size="large" />
    </WrapperView>
  );
};

export default AuthLoadingScreen;
