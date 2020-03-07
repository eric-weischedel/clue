import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import * as FS from 'expo-file-system';
import { Button } from 'react-native-paper';

import Loading from '../components/Loading.js';
import { readFileAsync } from '../global/FileSystem.js';

export default function FileExplorer() {

    const [files, setFiles] = useState([null]);
    const [selected, setSelected] = useState('');
    const [filesLoaded, setFilesLoaded] = useState(false);
    const [fileText, setFileText] = useState('No file selected.');

    function handleDelete() {
      console.log(`[BEGIN] Deleting file ${selected}...`);

      let msgSuccess = '[SUCCESS] Delete successful.';
      let msgFailure = '[ERROR] Error deleting.';
      let uri = FS.documentDirectory + selected;
      FS.deleteAsync(uri)
        .then(() => console.log(msgSuccess))
        .catch(() => console.log(msgFailure));
    }

    function loadDir() {
      console.log('[BEGIN] Reading document directory...');

      let msgSuccess = '[SUCCESS] Successfully read document directory.';
      let msgFailure = '[ERROR] Error reading document directory.';
      let uri = FS.documentDirectory;
      FS.readDirectoryAsync(uri)
        .then((contents) => {
          let filesList = contents.map((value, index) => (
            {
              key: index.toString(),
              value: value
            }
          ));
          setFiles(filesList);
          setFilesLoaded(true);
          console.log(msgSuccess);
        })
        .catch(() => console.log(msgFailure));
    }

    async function handleItemPress(fileName) {
      let contents = await readFileAsync(fileName);
      setFileText(contents);
      setSelected(fileName);
    }

    if (filesLoaded) {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>File Name</Text>
            <FlatList
              data={files}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.fileItem} onPress={() => handleItemPress(item.value)}>
                  <Text style={styles.fileItemText}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <Text style={styles.headerText}>Contents</Text>
            <ScrollView>
              <Text>{fileText}</Text>
              <Button color='red' mode='contained' onPress={handleDelete}>Delete</Button>
            </ScrollView>
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10
  },
  fileItem: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  fileItemText: {
    fontSize: 14
  }
});