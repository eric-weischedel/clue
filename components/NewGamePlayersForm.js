import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { FAB, Button } from 'react-native-paper';

import Colors from '../styles/Colors.js';
import NewGamePlayerItem from '../components/NewGamePlayerItem.js';

export default function NewGamePlayersForm(props) {

  function handleAddPlayer() {
    console.log('ay');
  }

  function handleChangeText(text, index) {
    var players = props.playersInput;
    players[index] = text;
    props.setPlayersInput(players);
  }

  return (
    <View style={styles.container}>
  
        <Text style={styles.headerText}>Who is playing?</Text>

        <TextInput 
          style={styles.textInput}
          placeholder='Type a name...'
          onChangeText={text => handleChangeText(text, 0)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Type a name...'
          onChangeText={text => handleChangeText(text, 1)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Type a name...'
          onChangeText={text => handleChangeText(text, 2)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder='Type a name...'
          onChangeText={text => handleChangeText(text, 3)}
        />

        <Button style={styles.addButton} icon='plus' onPress={handleAddPlayer} mode='contained' color='#eee'></Button>
    
        <FAB 
            visible={true}
            style={styles.fab} 
            icon='chevron-right' 
            color='white' 
            label='Next'
            onPress={props.handleNext}
        />
        <FAB 
            style={styles.fabBack}
            icon='chevron-left' 
            color='white' 
            small
            onPress={props.handleBack}
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
  textInput: {
    paddingTop: 20,
    marginHorizontal: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontSize: 16,
    borderStyle: 'solid'
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