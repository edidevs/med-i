import { Linking } from 'react-native';

const callNumber = () => Linking.openURL('tel:999');

export default callNumber;
