import React from 'react';

import BaseForm from './BaseForm.js';
import GameCards from '../assets/cards.js';

export default function SuggestionRoomForm(props) {

    const rooms = addKeys(GameCards.rooms);

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
            options={rooms}
            input={props.roomInput}
            setInput={props.setRoomInput}
            headerTitle='Which room?'
            nextText='Revealer'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );

}