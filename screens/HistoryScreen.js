import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import * as FS from 'expo-file-system';
import { Button } from 'react-native-paper';

import HistoryItem from '../components/HistoryItem.js';
import Colors from '../styles/Colors.js';

export default function HistoryScreen({ navigation }) {

  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [history, setHistory] = useState([]);

  function getHistory() {
    console.log('Reading appState to get working save...');

    let msgSuccess = 'Success reading appState.';
    let msgFailure = 'Error reading appState.';
    let uri = FS.documentDirectory + 'appState.json';
    FS.readAsStringAsync(uri)
      .then((contents) => {
        let appState = JSON.parse(contents);
        let workingSave = appState.workingSave;
        console.log(msgSuccess);

        console.log(`Reading file "${workingSave}" for suggestion history...`)

        let msgSuccess2 = `Success reading file "${workingSave}".`;
        let msgFailure2 = `Error reading file "${workingSave}".`;
        let uri2 = FS.documentDirectory + workingSave;
        FS.readAsStringAsync(uri2)
          .then((contents) => {
            let save = JSON.parse(contents);
            setHistory(addKeys(save.suggestionHistory));
            setHistoryLoaded(true);
            console.log(msgSuccess2);
          })
          .catch(console.log(msgFailure2));
      })
      .catch(console.log(msgFailure));
  }

  function addKeys(hist) {
    // Adds keys (for FlatList) and reverses suggestionHistory array (for proper viewing order)
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
    getHistory();
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size='large' color={Colors.secondary} />
      </View>
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