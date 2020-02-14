import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';

import CheckLabel from './CheckLabel';
import Colors from '../styles/Colors.js';

export default function CheckboxForm(props) {
    function handleToggle(name, checked) {
        if (!checked) {
            let input = props.input;
            input.push(name);
            props.setInput(input);
        } else {
            props.setInput(props.input.filter(item => item != name));
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{props.headerTitle}</Text>
            <FlatList
                data={props.options}
                renderItem={({ item }) => (
                    <CheckLabel 
                        name={item.name}
                        key={item.key}
                        handleToggle={handleToggle}
                        checked={props.input.includes(item.name)}
                    />
                )}
            />

            <FAB 
                style={styles.fab} 
                icon='chevron-right' 
                color='white' 
                label={props.nextText}
                onPress={props.handleNext}
            />
            <FAB 
                style={styles.fabBack} 
                visible={!props.noBack}
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
        justifyContent: 'center',
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
      backgroundColor: Colors.confirm
    },
    fabBack: {
      position: 'absolute',
      left: 20,
      bottom: 30,
      backgroundColor: '#777'
    }
});