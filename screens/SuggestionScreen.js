import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FAB, RadioButton } from 'react-native-paper';
import Colors from '../styles/Colors.js';

export default function SuggestionScreen() {

    const [nextEnabled, setNextEnabled] = useState(false);
    const [radioValue, setRadioValue] = useState('first');

    return (
    <View style={styles.container}>
        <Text onPress={() => setNextEnabled(true)}>Add a suggestion</Text>
        <RadioButton.Group
            onValueChange={value => setRadioValue(value)}
            value={radioValue}
        >
            <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('first') }>
                <RadioButton value='first' />
                <Text>First</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('second') }>
                <RadioButton value='second' />
                <Text>Second</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioContainer} onPress={ () => setRadioValue('third') }>
                <RadioButton value='third' />
                <Text>Thirdentary</Text>
            </TouchableOpacity>
        </RadioButton.Group>
        <FAB 
            disabled={ !nextEnabled }
            style={ [styles.fab, {backgroundColor: nextEnabled ? 'green' : 'gray'} ]} 
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
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 70,
    backgroundColor: 'green'
  }
});