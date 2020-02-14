import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FAB } from 'react-native-paper';

import Colors from '../styles/Colors.js';

export default function NewGameFilenameForm(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>What should we call this game?</Text>

            <TextInput 
                style={styles.textInput}
                placeholder='Type a file name...'
                value={props.fileName}
                onChangeText={(text) => props.setFileName(text)}
                onSubmitEditing={props.handleNext}
                autoFocus={true}
            />

            <FAB 
                style={styles.fab} 
                visible={props.fileName}
                icon='chevron-right' 
                color='white' 
                label='Create'
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
        borderStyle: 'solid',
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