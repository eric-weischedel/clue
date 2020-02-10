import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';

export default function NewGameWeaponsForm(props) {

    const weapons = [
        {key: '1', name: 'Knife'},
        {key: '2', name: 'Rope'},
        {key: '3', name: 'Poison'},
        {key: '4', name: 'Almonds'},
        {key: '5', name: 'Sugar'},
        {key: '6', name: 'Pizza the Hut'},
        {key: '7', name: 'Jabba the Hut'},
        {key: '8', name: 'Revolver'}
    ];

    return (
        <CheckboxForm 
            options={weapons}
            input={props.weaponsInput}
            setInput={props.setWeaponsInput}
            headerTitle='Which weapons do you have?'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
}