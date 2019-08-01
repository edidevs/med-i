import React from 'react';
import { View, StyleSheet, StatusBar, AsyncStorage } from 'react-native';

import { Spinner } from 'native-base';

const AuthLoadingScreen = props => {
  const getUserToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  React.useEffect(() => {
    getUserToken();
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Spinner color="#686d7d" />
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
