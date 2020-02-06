import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewGameVersionForm from '../components/NewGameVersionForm.js';
import NewGamePlayersForm from '../components/NewGamePlayersForm.js';

export default function NewGameScreen() {
    const [formStage, setFormStage] = useState(0);
    const [versionInput, setVersionInput] = useState('');
    const [playersInput, setPlayersInput] = useState([]);

    // == FORM STAGES ==
    // 0: Game Version
    // 1: Players
    // 2: Suspects
    // 3: Weapons
    // 4: Rooms
    // 5: Initialize

    function handleNext() {
        setFormStage(formStage + 1);
    }

    switch (formStage) {
        case 0:
            return (
                <NewGameVersionForm versionInput={versionInput} setVersionInput={setVersionInput} handleNext={handleNext} />
            );
        case 1:
            return (
                <NewGamePlayersForm playersInput={playersInput} setPlayersInput={setPlayersInput} handleNext={handleNext} />
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});