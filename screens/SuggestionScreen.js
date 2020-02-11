import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';

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

    function getSave(fileUri) {
      return new Promise(function(resolve, reject) {
        FileSystem.readAsStringAsync(fileUri)
          .then((contents) => {
            resolve(JSON.parse(contents));
          })
          .catch(function(error) {
            resolve({
              suggestionHistory: []
            });
          });
      });
    }

    async function updateSave(fileUri) {
      var save = await getSave(fileUri);

      save.suggestionHistory.push(
        {
          player: playerInput,
          cards: [suspectInput, weaponInput, roomInput],
          revealer: revealerInput
        }
      );

      FileSystem.writeAsStringAsync(fileUri, JSON.stringify(save, null, 2))
        .then(() => {
          console.log('Succesfully wrote to file ' + fileUri);
        })
        .catch((error) => {
          console.log(error);
        });
      
      setSaveJson(JSON.stringify(save, null, 2));

    }

    function handleNext() {
      if (formStage == 4) {
        updateSave(FileSystem.documentDirectory + 'working_save.json');
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