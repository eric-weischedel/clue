import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

export default function FileExplorer() {

    const [files, setFiles] = useState([null]);
    const [filesLoaded, setFilesLoaded] = useState(false);

    function loadDir() {
      FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
        .then((contents) => {
          let foo = contents.map((value, index) => (
            {
              key: index.toString(),
              value: value
            }
          ));
          console.log(foo);
          setFiles(foo);
          setFilesLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (filesLoaded) {
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.listContainer}
            data={files}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.fileItem}>
                <Text style={styles.fileItemText}>{item.value}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    } else {
      loadDir();
      return (
        <View>
          <ActivityIndicator size="large" color="#cccccc" />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%'
  },
  fileItem: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  fileItemText: {
    fontSize: 18
  }
});