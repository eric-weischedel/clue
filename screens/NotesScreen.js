import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import * as FS from 'expo-file-system';


export default function NotesScreen() {
    const [notesText, setNotesText] = React.useState('');

    function handleClearNotes() {
      setNotesText('');
    }

    function getWorkingSave() {
      return new Promise((resolve, reject) => {
        console.log('[BEGIN] Reading appState...');

        let msgSuccess = '[SUCCESS] Success getting working save.';
        let msgFailure = '[ERROR] Error getting working save.';
        let uri = FS.documentDirectory + 'appState.json';
        FS.readAsStringAsync(uri)
          .then((contents) => {
            let appState = JSON.parse(contents);
            console.log(msgSuccess);
            resolve(appState.workingSave);
          })
          .catch(() => {
            console.log(msgFailure);
            reject();
          });
      });
    }

    async function handleWriteNotes() {

      let file = await getWorkingSave();

      console.log('[BEGIN] Updating notes. Reading working save...');

      let msgSuccess = '[SUCCESS] Success reading working save.';
      let msgFailure = '[ERROR] Error reading working save.';
      let uri = FS.documentDirectory + file;
      FS.readAsStringAsync(uri)
        .then((contents) => {
          let save = JSON.parse(contents);
          save.notes = notesText;
          console.log(msgSuccess);

          console.log('[BEGIN] Updating working save...');

          let msgSuccess2 = '[SUCCESS] Success updating working save.';
          let msgFailure2 = '[ERROR] Error updating working save.';
          let uri2 = FS.documentDirectory + file;
          FS.writeAsStringAsync(uri2, JSON.stringify(save, null, 2))
            .then(() => console.log(msgSuccess2))
            .catch(() => console.log(msgFailure2));
        })
        .catch(() => console.log(msgFailure));
    }

    async function handleReadNotes() {

      let file = await getWorkingSave();

      console.log('[BEGIN] Reading notes...');

      let msgSuccess = '[SUCCESS] Success reading notes.';
      let msgFailure = '[ERROR] Error reading notes.';
      let uri = FS.documentDirectory + file;
      FS.readAsStringAsync(uri)
        .then((contents) => {
          let save = JSON.parse(contents);
          let notes = save.notes ? save.notes : 'No notes on file.';
          setNotesText(notes);
          console.log(msgSuccess);
        })
        .catch(() => {
          console.log(msgFailure);
        });
    }

    return (
        <View style={styles.container}>

            <Button style={styles.button} mode='contained' onPress={handleWriteNotes}>Save</Button>
            <Button style={styles.button} mode='outlined' onPress={handleReadNotes}>Load</Button>
            <Button style={styles.button} mode='outlined' onPress={handleClearNotes}>Clear</Button>

            <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                placeholder='Start typing here...'
                value={notesText}
                onChangeText={text => setNotesText(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
    padding: 30
  },
  button: {
    marginVertical: 5
  },
  textInput: {
    padding: 10,
    textAlignVertical: 'top', 
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  }
});