import React from 'react';

import BaseForm from './BaseForm.js';

export default function SuggestionWeaponForm(props) {

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
        <BaseForm
            options={weapons}
            input={props.weaponInput}
            setInput={props.setWeaponInput}
            headerTitle='Which weapon?'
            handleNext={props.handleNext}
        />
    );
    
}