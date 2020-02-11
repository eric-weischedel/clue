import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';

import BaseForm from '../components/BaseForm.js';
import Colors from '../styles/Colors.js';

export default function SaveScreen() {
  
  const [selected, setSelected] = useState('');
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [files, setFiles] = useState([null]);

  function getSelected() {
    // Read working_save and get fileName

    let uri = FileSystem.documentDirectory + 'working_save.json';
    FileSystem.readAsStringAsync(uri)
      .then((contents) => {
        let foo = JSON.parse(contents);
        setSelected(foo.fileName);
        setFilesLoaded(true);
        console.log('success reading working save');
      })
      .catch((error) => {
        console.log(error);
        console.log('error reading working save');
      })

  }


  function loadDir() {
    FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
      .then((contents) => {
        let foo = contents.map((value, index) => (
          {
            key: index.toString(),
            name: value
          }
        )).filter(value => value.name != 'working_save.json');
        console.log(foo);
        setFiles(foo);
        getSelected();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSelect() {
    console.log('next handled successfully');
  }

  if (filesLoaded) {
    return (
        <BaseForm
          options={files}
          setInput={setSelected}
          input={selected}
          headerTitle='Which game are we playing?'
          nextText='Select'
          handleNext={handleSelect}
          noBack
        />
    );
  } else {
    loadDir();
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={Colors.secondary} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});