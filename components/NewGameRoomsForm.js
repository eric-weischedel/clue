import React from 'react';

import CheckboxForm from '../components/CheckboxForm.js';

export default function NewGameRoomsForm(props) {

    const rooms = [
        {key: '1', name: 'Ball Room'},
        {key: '2', name: 'Pizza Chamber'},
        {key: '3', name: 'Carriage House'},
        {key: '4', name: 'The Moon'},
      ];

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