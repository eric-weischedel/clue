import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';

export default function NewGameSuspectsForm(props) {

  const suspects = [
    {key: '1', name: 'Col. Mustard'},
    {key: '2', name: 'Miss White'},
    {key: '3', name: 'Miss Scarlet'},
    {key: '4', name: 'Lebanon Levi'},
    {key: '5', name: 'Lebanon Eli'},
    {key: '6', name: 'The Ex Amish'},
  ];

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