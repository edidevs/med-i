import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyScreen = props => (
  <View style={styles.container}>
    <Text>BodyScreen</Text>
  </View>
);
export default BodyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
