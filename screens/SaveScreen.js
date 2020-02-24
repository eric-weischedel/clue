import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as FS from 'expo-file-system';

import BaseForm from '../components/BaseForm.js';
import Loading from '../components/Loading.js';
import { getWorkingSave } from '../global/FileSystem.js';

export default function SaveScreen(props) {
  
  const [selected, setSelected] = useState('');
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [files, setFiles] = useState([null]);

  async function getSelected() {
    let save = await getWorkingSave();
    setSelected(save.slice(0, -10));
    setFilesLoaded(true);
  }

  function loadDir() {
    console.log('[BEGIN] Reading document directory...');

    let msgSuccess = '[SUCCESS] Successfully read document directory.';
    let msgFailure = '[ERROR] Error reading document directory.';
    let uri = FS.documentDirectory;
    FS.readDirectoryAsync(uri)
      .then((contents) => {
        // Remove non-game files, add keys (for FlatList), and remove suffix from name
        let files = contents
          .filter(value => value.endsWith('_save.json'))
          .map((value, index) => (
              {
                key: index.toString(),
                name: value.slice(0, -10)
              }
            )
          );
        setFiles(files);
        getSelected();
        console.log(msgSuccess);
      })
      .catch(() => console.log(msgFailure));
  }

  function handleSelect() {
    console.log(`[BEGIN] Switching games to "${selected}". Reading appState...`);

    let msgSuccess = '[SUCCESS] Success reading appState.';
    let msgFailure = '[ERROR] Error reading appState.';
    let uri = FS.documentDirectory + 'appState.json';
    FS.readAsStringAsync(uri)
      .then((contents) => {
        let appState = JSON.parse(contents);
        console.log(msgSuccess);

        console.log('[BEGIN] Writing to appState.');

        appState.workingSave = selected + '_save.json';

        let msgSuccess2 = '[SUCCESS] Success writing to appState.';
        let msgFailure2 = '[ERROR] Error writing to appState';
        let uri2 = FS.documentDirectory + 'appState.json';
        FS.writeAsStringAsync(uri2, JSON.stringify(appState, null, 2))
          .then(() => {
            console.log(msgSuccess2);
            props.navigation.pop();
          })
          .catch(() => console.log(msgFailure2));

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
      <Loading />
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