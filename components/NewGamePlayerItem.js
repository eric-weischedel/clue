import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

export default function SecondaryScreen() {
    return (
        <View style={styles.itemContainer}>
            <Text>2</Text>
            <TextInput
                multiline={false}
                placeholder='Type a name here...'
                style={styles.textInput}
            />
            <Icon 
                name='x-circle'
                type='feather'
                color='#999'
                containerStyle={styles.icon}
                size={20}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
    },
    textInput: {
        height: 40,
        width: 245,
        marginLeft: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    icon: {
        marginLeft: 10
    }
});