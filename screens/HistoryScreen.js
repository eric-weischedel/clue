import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import HistoryItem from '../components/HistoryItem.js';

export default function HistoryScreen() {

  const history = [
    {
        key: '8',
        player: 'Mom',
        cards: ['Col. Mustard', 'Candlestick', 'Ball Room'],
        revealer: 'I'
    },
    {
        key: '7',
        player: 'Bryan',
        cards: ['Prof. Plum', 'Poison', 'Billiard Room'],
        revealer: 'I'
    },
    {
        key: '6',
        player: 'Joel Alexander',
        cards: ['Miss Scarlet', 'Poison', 'Carriage House'],
        revealer: 'Bryan'
    },
    {
        key: '5',
        player: 'I',
        cards: ['Mrs. White', 'Revolver', 'Conservatory'],
        revealer: 'Nobody'
    },
    {
        key: '4',
        player: 'Mom',
        cards: ['Col. Mustard', 'Candlestick', 'Ball Room'],
        revealer: 'Nobody'
    },
    {
        key: '3',
        player: 'Bryan',
        cards: ['Prof. Plum', 'Poison', 'Billiard Room'],
        revealer: 'I'
    },
    {
        key: '2',
        player: 'Joel Alexander',
        cards: ['Miss Scarlet', 'Poison', 'Carriage House'],
        revealer: 'Bryan'
    },
    {
        key: '1',
        player: 'I',
        cards: ['Mrs. White', 'Revolver', 'Conservatory'],
        revealer: 'Nobody'
    },
  ];

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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});