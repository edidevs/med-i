import { Alert } from 'react-native';

export const handleRoute = ({ navigation }, route) =>
  navigation.navigate(route);

export const handleRouteCurry = ({ navigation }) => route =>
  navigation.navigate(route);

export const goToCartAlert = ({ navigation }) => {
  Alert.alert(
    'Go To Cart',
    'Make sure you add few possible items you may need before going to cart.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Proceed',
        onPress: () => navigation.navigate('Store'),
      },
    ],
    { cancelable: false }
  );
};
