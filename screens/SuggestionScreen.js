import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FAB, RadioButton } from 'react-native-paper';
import Colors from '../styles/Colors.js';

export default function SuggestionScreen() {

    const [radioValue, setRadioValue] = useState('');

    return (
    <View style={styles.container}>

      <Text style={styles.headerText}>Whose turn is it?</Text>

      <View style={styles.radioGroup}>
        <RadioButton.Group
            onValueChange={value => setRadioValue(value)}
            value={radioValue}
        >
          <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('Joel') }>
              <RadioButton value='Joel' color={Colors.primary}/>
              <Text style={styles.radioText}>Joel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('B Man') }>
              <RadioButton value='B Man' color={Colors.primary}/>
              <Text style={styles.radioText}>B Man</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('Me') }>
              <RadioButton value='Me' color={Colors.primary}/>
              <Text style={[styles.radioText, {fontWeight: 'bold'}]}>Me</Text>
          </TouchableOpacity>

        </RadioButton.Group>
      </View>
      <Text>Selected option: {radioValue}</Text>

      <FAB 
          disabled={ !radioValue }
          style={ [styles.fab, {backgroundColor: radioValue ? 'green' : 'gray'} ]} 
          icon='check' 
          color='white' 
          onPress={() => console.log('FAB pressed')}
      />
    </View>
    );
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