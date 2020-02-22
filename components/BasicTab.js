import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts';
import Colors from '../styles/Colors.js';

export default function Tab(props) {

  const clueCards = props.cards;

  function checkforEven(key) {
    if ((parseInt(key) + 1) % 2 == 0) {
      return { backgroundColor: '#FBFBFB' }
    }
  }

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={clueCards}
        renderItem={({ item }) => (
          <View style={[styles.cardContainer, checkforEven(item.key)]}>
            <Text style={styles.cardText}>{item.name}</Text>
            <View style={styles.percentageContainer}>
              <Text style={styles.probabilityText}>{item.probability}%</Text>
              <ProgressCircle 
                style={{ height: 32, width: 32 }} 
                strokeWidth={4} 
                progress={item.probability / 100} 
                progressColor={Colors.secondary}
                backgroundColor={'#eaeaea'} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 19,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  percentageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardText: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
    color: '#000',
    includeFontPadding: false,
    textAlignVertical: 'center'
  },
  probabilityText: {
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'poppins-regular',
    color: '#000',
    includeFontPadding: false,
    textAlignVertical: 'center'
  }
});