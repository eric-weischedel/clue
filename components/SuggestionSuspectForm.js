import React from 'react';

import BaseForm from './BaseForm.js';
import GameCards from '../assets/cards.js';

export default function SuggestionSuspectForm(props) {

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
        <BaseForm
            options={suspects}
            input={props.suspectInput}
            setInput={props.setSuspectInput}
            headerTitle='Which suspect?'
            nextText='Weapon'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
    
}