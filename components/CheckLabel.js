import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

import Colors from '../styles/Colors.js';

export default function CheckLabel(props) {
    const [checked, setChecked] = useState(props.checked);

    function handleToggle() {
        setChecked(!checked);
        props.handleToggle(props.name, checked);
    }

    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
            <Checkbox 
                status={checked ? 'checked' : 'unchecked'}
                onPress={handleToggle}
                color={Colors.primary}
            />
            <Text style={styles.labelText}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingLeft: 20
    },
    labelText: {
        fontSize: 16,
        paddingLeft: 30,
        paddingVertical: 15
    }
});