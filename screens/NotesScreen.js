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
      // path: FileSystem.documentDirectory
      // stub: FileSystem.writeAsStringAsync(fileUri, contents, [options])

      let fileUri = FileSystem.documentDirectory + fileName;
      let contents = notesText;

      FileSystem.writeAsStringAsync(fileUri, contents)
        .then(() => {
          console.log('Succesfully wrote to file ' + fileUri);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    function handleReadNotes() {
      // path: FileSystem.documentDirectory + 'fileName.txt'
      // stub: FileSystem.readAsStringAsync(fileUri, [options])

      let fileUri = FileSystem.documentDirectory + fileName;

      FileSystem.readAsStringAsync(fileUri)
        .then((contents) => {
          setNotesText(contents);
          console.log('Successfully read file ' + fileUri);
        })
        .catch((error) => {
          console.log(error)
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