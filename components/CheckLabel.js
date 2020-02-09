import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';

import Colors from '../styles/Colors.js';

export default function CheckLabel(props) {
    const [checked, setChecked] = useState(false);

    function handleToggle() {
        setChecked(!checked);
        props.handleToggle(props.name, checked);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleToggle}>
            <Checkbox 
                status={checked ? 'checked' : 'unchecked'}
                onPress={handleToggle}
                color={Colors.primary}
            />
            <Text>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});