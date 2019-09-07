import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SportsScreen = () => (
  <View style={styles.container}>
    <Text>SportsScreen</Text>
  </View>
);
export default SportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
