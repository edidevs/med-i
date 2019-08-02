import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoreScreen = props => (
  <View style={styles.container}>
    <Text>MoreScreen</Text>
  </View>
);
export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
