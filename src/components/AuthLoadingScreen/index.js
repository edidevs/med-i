import React from 'react';
import { StatusBar, AsyncStorage } from 'react-native';

import { Spinner } from 'native-base';

import { WrapperView } from './styledComponents';

const AuthLoadingScreen = props => {
  const getUserToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  React.useEffect(() => {
    getUserToken();
  });

  return (
    <WrapperView>
      <StatusBar barStyle="default" />
      <Spinner color="#686d7d" />
    </WrapperView>
  );
};

export default AuthLoadingScreen;
