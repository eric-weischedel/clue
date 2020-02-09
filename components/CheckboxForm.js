import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import CheckLabel from './CheckLabel';

export default function CheckboxForm(props) {

    const data = [
        {key: '1', name: 'Col. Mustard'},
        {key: '2', name: 'Miss White'},
        {key: '3', name: 'Miss Scarlet'},
        {key: '4', name: 'Lebanon Levi'},
        {key: '5', name: 'Lebanon Eli'},
        {key: '6', name: 'The Ex Amish'},
    ];

    const [suspects, setSuspects] = useState([]);

    function handleToggle(name, checked) {
        if (!checked) {
            let dupe = suspects;
            dupe.push(name);
            setSuspects(dupe);
        } else {
            setSuspects(suspects.filter(item => item != name));
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CheckLabel 
                        name={item.name}
                        key={item.key}
                        suspects={suspects}
                        setSuspects={setSuspects}
                        handleToggle={handleToggle}
                    />
                )}
            />

            <Button onPress={() => console.log(suspects)} title='log array'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});