import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';
import GameCards from '../assets/cards.js';

export default function NewGameRoomsForm(props) {

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
        <CheckboxForm 
            options={rooms}
            input={props.roomsInput}
            setInput={props.setRoomsInput}
            headerTitle='Which rooms do you have?'
            nextText='Name'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
}