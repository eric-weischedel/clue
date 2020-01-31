import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { FAB, RadioButton } from 'react-native-paper';
import Colors from '../styles/Colors.js';

export default function SuggestionScreen() {

    const [playerInput, setPlayerInput] = useState('');
    const [suspectInput, setSuspectInput] = useState('');

    const [formStage, setFormStage] = useState(0);

    // == FORM STAGES ==
    // 0: Player
    // 1: Suspect
    // 2: Weapon
    // 3: Room
    // 4: Confirm

    function handleNext() {
      console.log('next');
      setFormStage(formStage + 1);
    }

    const players = [
      {key: '1', name: 'Joel'},
      {key: '2', name: 'Bryan'},
      {key: '3', name: 'Me'},
      {key: '4', name: 'Dad'},
    ];

    const suspects = [
      {key: '1', name: 'Col. Mustard'},
      {key: '2', name: 'Miss White'},
      {key: '3', name: 'Miss Scarlet'},
      {key: '4', name: 'Lebanon Levi'},
      {key: '5', name: 'Lebanon Eli'},
      {key: '6', name: 'The Ex Amish'},
    ];

    switch (formStage) {
      case 0:
        return (
          <View style={styles.container}>
      
            <Text style={styles.headerText}>Whose turn is it?</Text>
      
            <View style={styles.radioGroup}>
              <RadioButton.Group
                  onValueChange={value => setPlayerInput(value)}
                  value={playerInput}
              >
                <FlatList
                  data={players}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.radioContainer} onPress={ () => setPlayerInput(item.name) }>
                      <RadioButton value={item.name} color={Colors.primary}/>
                      <Text style={styles.radioText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
      
              </RadioButton.Group>
            </View>
      
            <FAB 
                disabled={ !playerInput }
                style={ [styles.fab, {backgroundColor: playerInput ? 'green' : 'gray'} ]} 
                icon='check' 
                color='white' 
                onPress={handleNext}
            />
          </View>
        );
      case 1:
        return (
          <View style={styles.container}>
      
            <Text style={styles.headerText}>Which suspect?</Text>
      
            <View style={styles.radioGroup}>
              <RadioButton.Group
                  onValueChange={value => setSuspectInput(value)}
                  value={suspectInput}
              >
                <FlatList
                  data={suspects}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.radioContainer} onPress={ () => setSuspectInput(item.name) }>
                      <RadioButton value={item.name} color={Colors.primary}/>
                      <Text style={styles.radioText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
      
              </RadioButton.Group>
            </View>
      
            <FAB 
                disabled={ !suspectInput }
                style={ [styles.fab, {backgroundColor: suspectInput ? 'green' : 'gray'} ]} 
                icon='check' 
                color='white' 
                onPress={handleNext}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.container}>
            <Text>Suggestion recorded as -</Text>
            <Text>Player: {playerInput}</Text>
            <Text>Suspect: {suspectInput}</Text>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    marginLeft: 10,
    marginVertical: 20,
    fontSize: 18
  },
  radioGroup: {
    paddingLeft: 0
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingLeft: 10
  },
  radioText: {
    fontSize: 16,
    paddingLeft: 30,
    paddingVertical: 15
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 70,
    backgroundColor: 'green'
  }
});