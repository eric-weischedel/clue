import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { FAB, RadioButton } from 'react-native-paper';
import Colors from '../styles/Colors.js';

export default function BaseForm(props) {

    // props.options
    // const suspects = [
    //     {key: '1', name: 'Col. Mustard'},
    //     {key: '2', name: 'Miss White'},
    //     {key: '3', name: 'Miss Scarlet'},
    //     {key: '4', name: 'Lebanon Levi'},
    //     {key: '5', name: 'Lebanon Eli'},
    //     {key: '6', name: 'The Ex Amish'},
    // ];

    // props.input = 'Col. Mustard'

    // props.setInput = (newVal) => (input = newVal)

    // props.headerTitle = 'Which suspect?'

    // props.nextText = 'Next'

    // props.handleNext = increment stage...

    // props.noBack = no back button

    // props.handleBack = decrement stage
    

    return (
        <View style={styles.container}>
      
            <Text style={styles.headerText}>{props.headerTitle}</Text>
        
            <View style={styles.radioGroup}>
                <RadioButton.Group
                    onValueChange={value => props.setInput(value)}
                    value={props.input}
                >
                    <FlatList
                        data={props.options}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.radioContainer} onPress={ () => props.setInput(item.name) }>
                                <RadioButton value={item.name} color={Colors.primary}/>
                                <Text style={styles.radioText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
            
                </RadioButton.Group>
            </View>
        
            <FAB 
                disabled={ !props.input }
                style={styles.fab} 
                visible={props.input}
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
    },
    headerText: {
      marginLeft: 20,
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
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      paddingLeft: 20
    },
    radioText: {
      fontSize: 16,
      paddingLeft: 30,
      paddingVertical: 15
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