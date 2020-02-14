import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import * as FS from 'expo-file-system';

import Colors from '../styles/Colors.js';
import Loading from '../components/Loading.js';


export default function NotesScreen(props) {
    const [notesText, setNotesText] = useState('');
    const [notesLoaded, setNotesLoaded] = useState(false);
    const [saveBtnLoading, setSaveBtnLoading] = useState(false);

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

      setSaveBtnLoading(true);

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
            .then(() => {
              console.log(msgSuccess2);
              props.navigation.pop();
            })
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
          setNotesLoaded(true);
        })
        .catch(() => {
          console.log(msgFailure);
        });
    }

    if (notesLoaded) {
      return (
          <View style={styles.container}>

            <View style={styles.buttonsContainer}>
              <Button style={styles.button} color='#777' mode='outlined' onPress={handleClearNotes}>Clear</Button>
              <View style={{marginHorizontal: 5}}></View>
              <Button style={styles.button} loading={saveBtnLoading} color={Colors.primary} mode='outlined' onPress={handleWriteNotes}>Save</Button>
            </View>

              <TextInput
                  style={styles.textInput}
                  multiline={true}
                  numberOfLines={10}
                  placeholder='Start typing here...'
                  value={notesText}
                  onChangeText={text => setNotesText(text)}
                  autoFocus={true}
              />
              
          </View>
      );
    } else {
      handleReadNotes();
      return (
        <Loading />
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  button: {
    flex: 1,
    marginVertical: 5,
  },
  textInput: {
    padding: 10,
    textAlignVertical: 'top', 
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5
  }
});