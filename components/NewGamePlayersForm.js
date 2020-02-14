import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FAB, Button } from 'react-native-paper';

import Colors from '../styles/Colors.js';

export default function NewGamePlayersForm(props) {

  const [players, setPlayers] = useState(props.playersInput);
  const [refresh, doRefresh] = useState(false);

  function handleAddPlayer() {
    if (players.length < 6) {
      players.push('');
      doRefresh(!refresh);
    }
  }

  function handleRemovePlayer() {
    players.pop();
    doRefresh(!refresh);
  }

  function handleChange(value, index) {
    players[index] = value;
    props.setPlayersInput(players.filter(name => name != ''));
  }

  return (
    <View style={styles.container}>
  
        <Text style={styles.headerText}>Who are your opponents?</Text>

        <View style={styles.buttonsContainer}>
          <Button style={styles.button} onPress={handleRemovePlayer} mode='outlined' color='#777'>Remove Player</Button>
          <View style={{marginHorizontal: 5}}></View>
          <Button style={styles.button} onPress={handleAddPlayer} mode='contained' color={Colors.secondary}>Add Player</Button>
        </View>

        <FlatList
          data={players.map((value, index) => ({ name: value, key: index.toString() }))}
          extraData={refresh}
          renderItem={({ item }) => (
            <View key={item.key}>
              <TextInput 
                style={styles.textInput} 
                clearButtonMode='always'
                onChangeText={(text) => handleChange(text, item.key)} 
                placeholder='Type name here...'
                defaultValue={item.name}
              />
            </View>
          )}
        />

        <FAB 
            visible={true}
            style={styles.fab} 
            icon='chevron-right' 
            color='white' 
            label='Suspects'
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
    paddingHorizontal: 20
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25
  },
  headerText: {
    marginTop: 20,
    fontSize: 18,
  },
  textInput: {
    paddingTop: 20,
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
  button: {
    flex: 1,
  }
});