import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts';
import Colors from '../styles/Colors.js';

export default function Tab(props) {

  const clueCards = props.cards;

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={clueCards}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardText}>{item.name}</Text>
            <View style={styles.percentageContainer}>
              <Text style={styles.probabilityText}>{item.probability}%</Text>
              <ProgressCircle 
                style={{ height: 25, width: 25 }} 
                strokeWidth={5} 
                progress={item.probability / 100} 
                progressColor={Colors.secondary}
                backgroundColor={'#eeeeee'} />
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
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  percentageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
    color: 'black'
  },
  probabilityText: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
    color: 'black',
    marginRight: 10
  }
});