import { AsyncStorage } from 'react-native';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import cartReducer from '../cartReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
