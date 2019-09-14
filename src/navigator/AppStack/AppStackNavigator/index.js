import { createStackNavigator } from 'react-navigation';

import { options } from './options';
import { configurations } from './configurations';

export { default as HealthyScreen } from '../../../components/HealthyScreen';

export const AppStack = createStackNavigator(configurations, options);
