import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SickScreen = props => (
  <View style={styles.container}>
    <Text>SickScreen</Text>
  </View>
);
export default SickScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
