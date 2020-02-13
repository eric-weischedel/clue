import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';


export default function NotesScreen() {
    const [notesText, setNotesText] = React.useState('');

    function handleClearNotes() {
      setNotesText('');
    }

    const fileName = 'notes.txt';

    function handleWriteNotes() {
      console.log('[BEGIN] Updating notes...');

      let contents = notesText;
      let msgSuccess = '[SUCCESS] Successfully wrote to notes.';
      let msgFailure = '[ERROR] Error writing to notes.';
      let uri = FileSystem.documentDirectory + fileName;
      FileSystem.writeAsStringAsync(uri, contents)
        .then(console.log(msgSuccess))
        .catch(() => console.log(msgFailure));
    }

    function handleReadNotes() {
      console.log('[BEGIN] Reading notes...');

      let msgSuccess = '[SUCCESS] Success reading notes.';
      let msgFailure = '[ERROR] Error reading notes.';
      let uri = FileSystem.documentDirectory + fileName;
      FileSystem.readAsStringAsync(uri)
        .then((contents) => {
          setNotesText(contents);
          console.log(msgSuccess);
        })
        .catch(() => console.log(msgFailure));
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