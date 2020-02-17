import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';
import GameCards from '../assets/cards.js';

export default function NewGameWeaponsForm(props) {

    const weapons = addKeys(GameCards.weapons)

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
            options={weapons}
            input={props.weaponsInput}
            setInput={props.setWeaponsInput}
            headerTitle='Which weapons do you have?'
            nextText='Rooms'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
}