import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import NewGameVersionForm from '../components/NewGameVersionForm.js';
import NewGamePlayersForm from '../components/NewGamePlayersForm.js';
import NewGameSuspectsForm from '../components/NewGameSuspectsForm.js';
import NewGameWeaponsForm from '../components/NewGameWeaponsForm.js';
import NewGameRoomsForm from '../components/NewGameRoomsForm.js';

export default function NewGameScreen() {
    const [formStage, setFormStage] = useState(0);
    const [versionInput, setVersionInput] = useState('');
    const [playersInput, setPlayersInput] = useState([]);
    const [suspectsInput, setSuspectsInput] = useState([]);
    const [weaponsInput, setWeaponsInput] = useState([]);
    const [roomsInput, setRoomsInput] = useState([]);

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

    function handleBack() {
        setFormStage(formStage - 1);
    }

    switch (formStage) {
        case 0:
            return (
                <NewGameVersionForm versionInput={versionInput} setVersionInput={setVersionInput} handleNext={handleNext} handleBack={handleBack} />
            );
        case 1:
            return (
                <NewGamePlayersForm playersInput={playersInput} setPlayersInput={setPlayersInput} handleNext={handleNext} handleBack={handleBack} />
            );
        case 2: 
            return (
                <NewGameSuspectsForm suspectsInput={suspectsInput} setSuspectsInput={setSuspectsInput} handleNext={handleNext} handleBack={handleBack} />
            );
        case 3: 
            return (
                <NewGameWeaponsForm weaponsInput={weaponsInput} setWeaponsInput={setWeaponsInput} handleNext={handleNext} handleBack={handleBack} />
            );
        case 4:
            return (
                <NewGameRoomsForm roomsInput={roomsInput} setRoomsInput={setRoomsInput} handleNext={handleNext} handleBack={handleBack} />
            );
        case 5: 
            return (
                <View style={styles.container}>
                    <Text>version: {versionInput}</Text>
                    <Text>players: {JSON.stringify(playersInput)}</Text>
                    <Text>suspects: {JSON.stringify(suspectsInput)}</Text>
                    <Text>weapons: {JSON.stringify(weaponsInput)}</Text>
                    <Text>rooms: {JSON.stringify(roomsInput)}</Text>
                </View>
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