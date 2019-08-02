import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthyScreen = props => (
  <View style={styles.container}>
    <Text>HealthyScreen</Text>
  </View>
);
export default HealthyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
