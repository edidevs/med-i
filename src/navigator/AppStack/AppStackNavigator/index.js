import { createStackNavigator } from 'react-navigation';

import { options } from './options';
import { configurations } from './configurations';

export const AppStack = createStackNavigator(configurations, options);
