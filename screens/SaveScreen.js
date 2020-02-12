import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as FileSystem from 'expo-file-system';

import BaseForm from '../components/BaseForm.js';
import Colors from '../styles/Colors.js';

export default function SaveScreen(props) {
  
  const [selected, setSelected] = useState('');
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [files, setFiles] = useState([null]);

  function getSelected() {
    console.log('Getting selected game...');

    // Read appState and get workingSave
    let uri = FileSystem.documentDirectory + 'appState.json';
    FileSystem.readAsStringAsync(uri)
      .then((contents) => {
        let foo = JSON.parse(contents);
        setSelected(foo.workingSave);
        setFilesLoaded(true);
        console.log('Success reading appstate to get working save.');
      })
      .catch((error) => {
        console.log(error);
        console.log('Error reading appState to get working save.');
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
        )).filter(value => value.name != 'notes.txt');
        console.log(foo);
        setFiles(foo);
        getSelected();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSelect() {
    console.log('Switching games...');

    // Change working save in appState.json
    let uri = FileSystem.documentDirectory + 'appState.json';

    // Todo: read appState and update workingSave instead of replacing entire file
    // In the future when we add other things in appState, this won't work.
    let contents = JSON.stringify({ workingSave: selected }, null, 2);
    FileSystem.writeAsStringAsync(uri, contents)
      .then(() => {
        console.log('Successfully wrote to appState.');
        props.navigation.pop();
      })
      .catch((error) => {
        console.log('Error writing to appState.');
      });
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