import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = props => (
  <View style={styles.container}>
    <Text>StoreScreen</Text>
  </View>
);
export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
