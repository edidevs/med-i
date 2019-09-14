import { createStackNavigator } from 'react-navigation';

import { SignInScreen, SignUpScreen1, SignUpScreen2 } from '../../components';

export const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp1: SignUpScreen1,
    SignUp2: SignUpScreen2,
  },
  { headerMode: 'none' }
);
