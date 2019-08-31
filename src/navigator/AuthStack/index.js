import { createStackNavigator } from 'react-navigation';

import SignInScreen from '../../components/SignInScreen';
import SignUpScreen1 from '../../components/SignUpScreen1';
import SignUpScreen2 from '../../components/SignUpScreen2';

export const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp1: SignUpScreen1,
    SignUp2: SignUpScreen2,
  },
  { headerMode: 'none' }
);
