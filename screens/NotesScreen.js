import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default function NotesScreen() {
    const [text, changeText] = React.useState('No Notes Entered');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={10}
                placeholder='Start typing here...'
                onChangeText={text => changeText(text)}
            />
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  textInput: {
    padding: 10,
    textAlignVertical: 'top', 
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  }
});