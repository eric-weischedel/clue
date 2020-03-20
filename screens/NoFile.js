import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import Colors from '../styles/Colors.js';

export default function NoFileScreen(props) {

    function handlePress() {
        console.log('new game1');
        props.navigation.push('NewGame');
    }

    return (
        <View style={styles.container}>
            <Text>You must create a new game.</Text>
            <Button color={Colors.primary} mode='outlined' onPress={handlePress}>Create New Game</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 30
      }
});