import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, Button } from 'react-native-paper';

import Colors from '../styles/Colors.js';
import NewGamePlayerItem from '../components/NewGamePlayerItem.js';

export default function NewGamePlayersForm() {

  function handleAddPlayer() {
    console.log('ay');
  }

  return (
    <View style={styles.container}>
  
        <Text style={styles.headerText}>Who is playing?</Text>

        <Text>Order</Text>
        <Text>Name</Text>

        <NewGamePlayerItem />

        <Button style={styles.addButton} icon='plus' onPress={handleAddPlayer} mode='contained' color='#eee'></Button>
    
        <FAB 
            style={styles.fab} 
            icon='chevron-right' 
            color='white' 
            label='Next'
        />
        <FAB 
            style={styles.fabBack}
            icon='chevron-left' 
            color='white' 
            small
        />

    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  headerText: {
    marginLeft: 20,
    marginVertical: 20,
    fontSize: 18
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: Colors.green
  },
  fabBack: {
    position: 'absolute',
    left: 20,
    bottom: 30,
    backgroundColor: '#777'
  },
  addButton: {
    marginTop: 10,
    width: 245,
    alignSelf: 'center'
  }
});