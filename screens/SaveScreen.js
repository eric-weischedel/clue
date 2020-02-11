import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseForm from '../components/BaseForm.js';

export default function SaveScreen() {

  const saves = [
    { key: '1', name: 'Fam game 1' },
    { key: '2', name: 'Fam gam 2' },
  ];

  const [selected, setSelected] = useState('Fam gam 2');

  function handleNext() {
    console.log('next handled successfully');
  }

  return (
    <View style={styles.container}>
      <BaseForm
        options={saves}
        input={selected}
        setInput={setSelected}
        headerTitle='Which game are we playing?'
        nextText='Select'
        handleNext={handleNext}
        noBack
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});