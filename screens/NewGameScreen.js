import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as FS from 'expo-file-system';

import NewGameVersionForm from '../components/NewGameVersionForm.js';
import NewGamePlayersForm from '../components/NewGamePlayersForm.js';
import NewGameSuspectsForm from '../components/NewGameSuspectsForm.js';
import NewGameWeaponsForm from '../components/NewGameWeaponsForm.js';
import NewGameRoomsForm from '../components/NewGameRoomsForm.js';
import NewGameFilenameForm from '../components/NewGameFilenameForm.js';

export default function NewGameScreen() {
    const [formStage, setFormStage] = useState(0);
    const [versionInput, setVersionInput] = useState('');
    const [playersInput, setPlayersInput] = useState(['']);
    const [suspectsInput, setSuspectsInput] = useState([]);
    const [weaponsInput, setWeaponsInput] = useState([]);
    const [roomsInput, setRoomsInput] = useState([]);
    const [fileName, setFileName] = useState('');

    // == FORM STAGES ==
    // 0: Game Version
    // 1: Players
    // 2: Suspects
    // 3: Weapons
    // 4: Rooms
    // 5: Initialize

    function handleInitialize(){
        console.log('[BEGIN] Initializing new game...');

        let save = {
            myCards: suspectsInput.concat(weaponsInput).concat(roomsInput),
            players: playersInput,
            suggestionHistory: [],
            version: versionInput,
        };
        let msgSuccess = '[SUCCESS] Success creating new save file.';
        let msgFailure = '[ERROR] Error creating new save file.';
        let uri = FS.documentDirectory + fileName + '_save.json';
        FS.writeAsStringAsync(uri, JSON.stringify(save, null, 2))
            .then(() => {
                console.log(msgSuccess);

                console.log('[BEGIN] Switching games...');

                let contents = JSON.stringify({ workingSave: fileName + '_save.json'}, null, 2);
                let msgSuccess2 = '[SUCCESS] Success writing to appState.';
                let msgFailure2 = '[ERROR] Error writing to appState.'
                let uri2 = FS.documentDirectory + 'appState.json';
                FS.writeAsStringAsync(uri2, contents)
                    .then(() => console.log(msgSuccess2))
                    .catch(() => console.log(msgFailure2));
            })
            .catch(() => console.log(msgFailure));
    }

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
                <NewGameFilenameForm fileName={fileName} setFileName={setFileName} handleNext={handleNext} handleBack={handleBack} />
            );
        case 6: 
            handleInitialize();
            return (
                <View style={styles.container}>

                    <Text style={styles.header}>Version</Text>
                    <Text>{versionInput}</Text>

                    <Text style={styles.header}>Players</Text>
                    <Text>{JSON.stringify(playersInput)}</Text>

                    <Text style={styles.header}>Cards</Text>
                    <Text>{JSON.stringify(suspectsInput.concat(weaponsInput).concat(roomsInput), null, 2)}</Text>

                    <Text style={styles.header}>File name</Text>
                    <Text>{fileName}</Text>

                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20
    },
    header: {
        fontWeight: 'bold',
        marginTop: 10
    }
});