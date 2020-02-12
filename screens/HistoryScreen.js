import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { AppLoading } from 'expo';
import * as FileSystem from 'expo-file-system';
import { Button } from 'react-native-paper';

import HistoryItem from '../components/HistoryItem.js';

export default function HistoryScreen({ navigation }) {

  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [history, setHistory] = useState([]);

  function getHistory() {
    // First, get the workingSave from appState. Then, retrieve that file.

    let dir = FileSystem.documentDirectory;
    FileSystem.readAsStringAsync(dir + 'appState.json')
      .then((contents) => {
        console.log('Successfully read appState to retrieve workingSave.');
        let foo = JSON.parse(contents);
        let fileName = foo.workingSave;
        FileSystem.readAsStringAsync(dir + fileName)
          .then((contents) => {
            console.log('Successfully read' + fileName);
            let foo = JSON.parse(contents);
            setHistory(addKeys(foo.suggestionHistory));
          })
          .catch((error) => {
            console.log('Error reading save json');
          });
      })
      .catch((error) => {
        console.log('Error reading appState to retrieve workingSave');
      });

  }

  function addKeys(hist) {
    // Adds keys (FlatList) and reverses (viewing order) suggestionHistory array
    hist.forEach((item, index) => {
      item.key = (index + 1).toString();
    });
    return hist.reverse();
  }

  if (historyLoaded) {
    if (history.length > 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={history}
            renderItem={({ item }) => (
              <HistoryItem 
                index={item.key}
                player={item.player}
                cards={item.cards}
                revealer={item.revealer}
              />
            )}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.messageContainer}>
            <Text style={styles.messageTitle}>Nothing to see here!</Text>
            <Text style={styles.messageText}>
              It looks like your game just started. Once you add players' suggestions, they will appear here for your reference.
            </Text>
            <Button mode='outlined' color='#777' style={styles.button} onPress={() => navigation.pop()}>Close</Button>
          </View>
        </View>
      );
    }
  } else {
    return (
      <AppLoading 
        startAsync={getHistory}
        onFinish={() => setHistoryLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    margin: 30
  },
  messageTitle: {
    fontFamily: 'raleway-medium',
    fontSize: 18,
    lineHeight: 50,
    color: '#777'
  },
  messageText: {
    fontFamily: 'raleway-regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#333333'
  },
  button: {
    marginTop: 20
  }
});