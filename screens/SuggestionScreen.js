import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as FS from 'expo-file-system';

import PlayerForm from '../components/SuggestionPlayerForm.js';
import SuspectForm from '../components/SuggestionSuspectForm.js';
import WeaponForm from '../components/SuggestionWeaponForm.js';
import RoomForm from '../components/SuggestionRoomForm.js';
import RevealerForm from '../components/SuggestionRevealerForm.js';


export default function SuggestionScreen({ navigation }) {

    const [playerInput, setPlayerInput] = useState('');
    const [suspectInput, setSuspectInput] = useState('');
    const [weaponInput, setWeaponInput] = useState('');
    const [roomInput, setRoomInput] = useState('');
    const [revealerInput, setRevealerInput] = useState('');
    const [saveJson, setSaveJson] = useState('');

    const [formStage, setFormStage] = useState(0);

    // == FORM STAGES ==
    // 0: Player
    // 1: Suspect
    // 2: Weapon
    // 3: Room
    // 4: Revealer
    // 5: Save history and update probabilities

    
    function updateSave() {
      console.log('[BEGIN] Updating save. Getting working save...');
      // 1. Get working save 2. Read working save 3. Update working save

      let msgSuccess = '[SUCCESS] Successfully read appstate to retrieve workingSave.';
      let msgFailure = '[ERROR] Error reading appstate.';
      let uri = FS.documentDirectory + 'appState.json';
      FS.readAsStringAsync(uri)
        .then((contents) => {
          let appState = JSON.parse(contents);
          let fileName = appState.workingSave;
          console.log(msgSuccess);

          console.log('[BEGIN] Reading save file...');

          let msgSuccess2 = `[SUCCESS] Success reading file "${fileName}".`;
          let msgFailure2 = `[ERROR] Error reading file "${fileName}".`;
          let uri2 = FS.documentDirectory + fileName;
          FS.readAsStringAsync(uri2)
            .then((contents) => {
              let file = JSON.parse(contents);
              file.suggestionHistory.push(
                {
                  player: playerInput,
                  cards: [suspectInput, weaponInput, roomInput],
                  revealer: revealerInput
                }
              );
              console.log(msgSuccess2);

              console.log(`[BEGIN] Pushing updated suggestion history to "${fileName}"...`);

              let msgSuccess3 = `[SUCCESS] Success writing to "${fileName}".`;
              let msgFailure3 = `[ERROR] Error writing to "${fileName}".`;
              let uri3 = FS.documentDirectory + fileName;
              FS.writeAsStringAsync(uri3, JSON.stringify(file, null, 2))
                .then(() => {
                  setSaveJson(JSON.stringify(file, null, 2));
                  console.log(msgSuccess3);
                })
                .catch(() => console.log(msgFailure3));
            })
            .catch(() => console.log(msgFailure2));
        })
        .catch(() => console.log(msgFailure));
    }

    function handleNext() {
      if (formStage == 4) {
        updateSave();
      }
      setFormStage(formStage + 1);
    }

    function handleBack() {
      if (formStage != 0) setFormStage(formStage - 1);
    }

    switch (formStage) {
      case 0:
        return (
          <PlayerForm playerInput={playerInput} setPlayerInput={setPlayerInput} handleNext={handleNext} handleBack={handleBack} />
        );
      case 1:
        return (
          <SuspectForm suspectInput={suspectInput} setSuspectInput={setSuspectInput} handleNext={handleNext} handleBack={handleBack} />
        );
      case 2:
        return (
          <WeaponForm weaponInput={weaponInput} setWeaponInput={setWeaponInput} handleNext={handleNext} handleBack={handleBack} />
        );
      case 3:
        return (
          <RoomForm roomInput={roomInput} setRoomInput={setRoomInput} handleNext={handleNext} handleBack={handleBack} />
        );
      case 4:
        return (
          <RevealerForm revealerInput={revealerInput} setRevealerInput={setRevealerInput} handleNext={handleNext} handleBack={handleBack} />
        );
      case 5:
        return (
          <View style={styles.container}>
            <ScrollView>
              <Text>Suggestion recorded as -</Text>
              <Text>Player: {playerInput}</Text>
              <Text>Suspect: {suspectInput}</Text>
              <Text>Weapon: {weaponInput}</Text>
              <Text>Room: {roomInput}</Text>
              <Text>Revealer: {revealerInput}</Text>
              <Text>JSON: {saveJson}</Text>
            </ScrollView>
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});