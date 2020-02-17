import React from 'react';

import BaseForm from './BaseForm.js';
import GameCards from '../assets/cards.js';

export default function SuggestionWeaponForm(props) {

    const weapons = addKeys(GameCards.weapons);

    function addKeys(arr) {
        return arr.map((value, index) => (
            {
                key: index.toString(),
                name: value
            }
        ));
    }

    return (
        <BaseForm
            options={weapons}
            input={props.weaponInput}
            setInput={props.setWeaponInput}
            headerTitle='Which weapon?'
            nextText='Room'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
    
}