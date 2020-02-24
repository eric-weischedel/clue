import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import Colors from '../styles/Colors.js';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color={Colors.loading}/>
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