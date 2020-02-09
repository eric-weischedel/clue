import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SecondaryScreen() {
  return (
    <View style={styles.container}>
      <Text>Get which suspects player has.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});