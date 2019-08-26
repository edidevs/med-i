import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PainScreen = props => (
  <View style={styles.container}>
    <Text>PainScreen</Text>
  </View>
);
export default PainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
