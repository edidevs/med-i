import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YogaScreen = () => (
  <View style={styles.container}>
    <Text>YogaScreen</Text>
  </View>
);
export default YogaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
