import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

export default function SaveScreen() {

    const [json, setJson] = useState('json not loaded');

    function loadJson() {
        FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'save.json')
        .then((contents) => {
            let json = JSON.parse(contents);
            setJson(JSON.stringify(json, null, 2));
        })
        .catch(function(error) {
            setJson(error);
        });
    }

    function clearJson() {
        FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'save.json', JSON.stringify({ suggestionHistory: [] }, null, 2))
        .then(() => {
          console.log('Succesfully wrote to file');
        })
        .catch((error) => {
          console.log('error clearing json');
        });
    }

    return (
        <View style={styles.container}>
            <Button mode='contained' onPress={loadJson}>View save.json</Button>
            <Button mode='outlined' onPress={clearJson}>Reset save.json</Button>
            <ScrollView style={{width: '100%'}}>
                <Text>{json}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});