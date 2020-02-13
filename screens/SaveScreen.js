import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as FS from 'expo-file-system';

import BaseForm from '../components/BaseForm.js';
import Colors from '../styles/Colors.js';

export default function SaveScreen(props) {
  
  const [selected, setSelected] = useState('');
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [files, setFiles] = useState([null]);

  function getSelected() {
    console.log('[BEGIN] Reading appState to get selected game...');

    let msgSuccess = '[SUCCESS] Success reading appState.';
    let msgFailure = '[ERROR] Error reading appState.';
    let uri = FS.documentDirectory + 'appState.json';
    FS.readAsStringAsync(uri)
      .then((contents) => {
        let appState = JSON.parse(contents);
        setSelected(appState.workingSave);
        setFilesLoaded(true);
        console.log(msgSuccess);
      })
      .catch(() => console.log(msgFailure));
  }

  function loadDir() {
    console.log('[BEGIN] Reading document directory...');

    let msgSuccess = '[SUCCESS] Successfully read document directory.';
    let msgFailure = '[ERROR] Error reading document directory.';
    let uri = FS.documentDirectory;
    FS.readDirectoryAsync(uri)
      .then((contents) => {
        // Add keys (for FlatList) and remove non-game files
        let files = contents
          .map((value, index) => (
              {
                key: index.toString(),
                name: value
              }
            )
          )
          .filter(value => value.name != 'notes.txt' && value.name != 'appState.json');
        setFiles(files);
        getSelected();
        console.log(msgSuccess);
      })
      .catch(() => console.log(msgFailure));
  }

  function handleSelect() {
    console.log(`[BEGIN] Switching games to "${selected}"...`);

    let msgSuccess = '[SUCCESS] Successfully wrote to appState.';
    let msgFailure = '[ERROR] Error writing to appState';
    let uri = FS.documentDirectory + 'appState.json';

    // Todo: read appState and update workingSave instead of replacing entire file
    // In the future when we add other things in appState, this won't work.
    let contents = JSON.stringify({ workingSave: selected }, null, 2);
    FS.writeAsStringAsync(uri, contents)
      .then(() => {
        console.log(msgSuccess);
        props.navigation.pop();
      })
      .catch(() => console.log(msgFailure));
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