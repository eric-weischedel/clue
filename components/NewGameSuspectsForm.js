import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';
import GameCards from '../assets/cards.js';

export default function NewGameSuspectsForm(props) {

  const suspects = addKeys(GameCards.suspects);

  function addKeys(arr) {
    return arr.map((value, index) => (
      {
        key: index.toString(),
        name: value
      }
    ));
  }

  return (
    <CheckboxForm 
      options={suspects}
      input={props.suspectsInput}
      setInput={props.setSuspectsInput}
      headerTitle='Which suspects do you have?'
      nextText='Weapons'
      handleNext={props.handleNext}
      handleBack={props.handleBack}
    />
  );
}