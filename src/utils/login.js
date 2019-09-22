import { AsyncStorage } from 'react-native';

import { handleRoute } from './handleRoute';

const login = async navigation => {
  await AsyncStorage.setItem('userToken', 'abc');
  handleRoute(navigation, 'App');
};

export default login;
