import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppLoading } from 'expo';
import * as FileSystem from 'expo-file-system';

import HistoryItem from '../components/HistoryItem.js';

export default function HistoryScreen() {

  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [history, setHistory] = useState([]);

  function getHistory() {
    // Returns suggestionHistory array from save.json
    FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'save.json')
    .then((contents) => {
        let json = JSON.parse(contents);
        setHistory(addKeys(json.suggestionHistory));
    })
    .catch(() => {
        console.log('error reading save.json');
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
      <AppLoading 
        startAsync={getHistory}
        onFinish={() => setHistoryLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});