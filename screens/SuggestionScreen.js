import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PlayerForm from '../components/SuggestionPlayerForm.js';
import SuspectForm from '../components/SuggestionSuspectForm.js';
import WeaponForm from '../components/SuggestionWeaponForm.js';
import RoomForm from '../components/SuggestionRoomForm.js';

export default function SuggestionScreen() {

    const [playerInput, setPlayerInput] = useState('');
    const [suspectInput, setSuspectInput] = useState('');
    const [weaponInput, setWeaponInput] = useState('');
    const [roomInput, setRoomInput] = useState('');

    const [formStage, setFormStage] = useState(0);

    // == FORM STAGES ==
    // 0: Player
    // 1: Suspect
    // 2: Weapon
    // 3: Room
    // 4: Revealer
    // 5: Save history and update probabilities

    function handleNext() {
      setFormStage(formStage + 1);
    }

    switch (formStage) {
      case 0:
        return (
          <PlayerForm playerInput={playerInput} setPlayerInput={setPlayerInput} handleNext={handleNext}/>
        );
      case 1:
        return (
          <SuspectForm suspectInput={suspectInput} setSuspectInput={setSuspectInput} handleNext={handleNext}/>
        );
      case 2:
        return (
          <WeaponForm weaponInput={weaponInput} setWeaponInput={setWeaponInput} handleNext={handleNext}/>
        );
      case 3:
        return (
          <RoomForm roomInput={roomInput} setRoomInput={setRoomInput} handleNext={handleNext}/>
        );
      case 4:
        return (
          <View style={styles.container}>
            <Text>Suggestion recorded as -</Text>
            <Text>Player: {playerInput}</Text>
            <Text>Suspect: {suspectInput}</Text>
            <Text>Weapon: {weaponInput}</Text>
            <Text>Room: {roomInput}</Text>
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