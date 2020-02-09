import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

export default function FileExplorer() {

    const [files, setFiles] = useState([null]);
    const [filesLoaded, setFilesLoaded] = useState(false);
    const [fileText, setFileText] = useState('No file selected.');

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

    function handleItemPress(fileName) {
      let uri = FileSystem.documentDirectory + fileName;
      FileSystem.readAsStringAsync(uri)
        .then((contents) => {
          setFileText(contents);
        })
        .catch((error) => {
          console.log(error);
        });
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
            </ScrollView>
          </View>
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