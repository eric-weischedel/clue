import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import * as FS from 'expo-file-system';

import Colors from '../styles/Colors.js';
import Loading from '../components/Loading.js';
import { readWorkingSave, getWorkingSave } from '../global/FileSystem.js';


export default function NotesScreen(props) {
    const [notesText, setNotesText] = useState('');
    const [notesLoaded, setNotesLoaded] = useState(false);
    const [saveBtnLoading, setSaveBtnLoading] = useState(false);

    function handleClearNotes() {
      setNotesText('');
    }

    async function handleWriteNotes() {
      setSaveBtnLoading(true);

      let fileName = await getWorkingSave();

      let save = await readWorkingSave();
      save = JSON.parse(save);
      save.notes = notesText;

      console.log('[BEGIN] Updating working save...');

      let msgSuccess = '[SUCCESS] Success updating working save.';
      let msgFailure = '[ERROR] Error updating working save.';
      let uri = FS.documentDirectory + fileName;
      FS.writeAsStringAsync(uri, JSON.stringify(save, null, 2))
        .then(() => {
          console.log(msgSuccess);
          props.navigation.pop();
        })
        .catch(() => console.log(msgFailure));
    }

    async function handleReadNotes() {
      let save = await readWorkingSave();
      save = JSON.parse(save);
      let notes = save.notes || 'No notes on file.';
      setNotesText(notes);
      setNotesLoaded(true);
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