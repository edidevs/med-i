import { createMaterialTopTabNavigator } from 'react-navigation';

import { options } from './options';
import { configurations } from './configurations';

export const AppTab = createMaterialTopTabNavigator(configurations, options);
