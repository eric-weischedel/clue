import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as FS from 'expo-file-system';
import { Button } from 'react-native-paper';

import HistoryItem from '../components/HistoryItem.js';
import Loading from '../components/Loading.js';
import { readWorkingSave } from '../global/FileSystem.js';

export default function HistoryScreen({ navigation }) {

  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [history, setHistory] = useState([]);

  async function getHistory() {
    let save = await readWorkingSave();
    save = JSON.parse(save);
    setHistory(addKeys(save.suggestionHistory));
    setHistoryLoaded(true);
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
      <Loading />
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
    fontFamily: 'poppins-medium',
    fontSize: 18,
    lineHeight: 50,
    color: '#777'
  },
  messageText: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#333333'
  },
  button: {
    marginTop: 20
  }
});