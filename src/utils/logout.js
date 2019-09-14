import { AsyncStorage } from 'react-native';

import { handleRoute } from './handleRoute';

const logout = async navigation => {
  await AsyncStorage.clear();
  handleRoute(navigation, 'AuthLoading');
};

export default logout;
