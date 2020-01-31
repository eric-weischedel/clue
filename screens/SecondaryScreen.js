import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SecondaryScreen() {
  return (
    <View style={styles.container}>
      <Text>This is a screen intended for future use.</Text>
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