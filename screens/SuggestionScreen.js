import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as FS from 'expo-file-system';

import PlayerForm from '../components/SuggestionPlayerForm.js';
import SuspectForm from '../components/SuggestionSuspectForm.js';
import WeaponForm from '../components/SuggestionWeaponForm.js';
import RoomForm from '../components/SuggestionRoomForm.js';
import RevealerForm from '../components/SuggestionRevealerForm.js';

import Loading from '../components/Loading.js';
import { readWorkingSaveAsync, getWorkingSaveAsync } from '../global/FileSystem.js';


export default function SuggestionScreen({ navigation }) {

    const [playerInput, setPlayerInput] = useState('');
    const [suspectInput, setSuspectInput] = useState('');
    const [weaponInput, setWeaponInput] = useState('');
    const [roomInput, setRoomInput] = useState('');
    const [revealerInput, setRevealerInput] = useState('');

    const [formStage, setFormStage] = useState(0);
    const [players, setPlayers] = useState(null);

    // == FORM STAGES ==
    // 0: Player
    // 1: Suspect
    // 2: Weapon
    // 3: Room
    // 4: Revealer
    // 5: Save history and update probabilities

    async function getPlayers() {
      let save = await readWorkingSaveAsync();
      save = JSON.parse(save);
      setPlayers(save.players);
    }
    
    async function updateSave() {

      let fileName = await getWorkingSaveAsync();

      let save = await readWorkingSaveAsync();
      console.log(save);
      save = JSON.parse(save);
      save.suggestionHistory.push(
        {
          player: playerInput,
          cards: [suspectInput, weaponInput, roomInput],
          revealer: revealerInput
        }
      );

      let msgSuccess = `[SUCCESS] Success writing to save.`;
      let msgFailure = `[ERROR] Error writing to save.`;
      let uri = FS.documentDirectory + fileName;
      FS.writeAsStringAsync(uri, JSON.stringify(save, null, 2))
        .then(() => {
          console.log(msgSuccess);
          navigation.pop();
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

    if (players) {
      switch (formStage) {
        case 0:
          return (
            <PlayerForm players={players} playerInput={playerInput} setPlayerInput={setPlayerInput} handleNext={handleNext} handleBack={handleBack} />
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
            <RevealerForm players={players} revealerInput={revealerInput} setRevealerInput={setRevealerInput} handleNext={handleNext} handleBack={handleBack} />
          );
        case 5:
          return (
            <Loading />
          );
      }
    } else {
      getPlayers();
      return (
        <Loading />
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