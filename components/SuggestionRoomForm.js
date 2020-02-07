import React from 'react';

import BaseForm from './BaseForm.js';

export default function SuggestionRoomForm(props) {

    const rooms = [
        {key: '1', name: 'Ball Room'},
        {key: '2', name: 'Pizza Chamber'},
        {key: '3', name: 'Carriage House'},
        {key: '4', name: 'The Moon'},
      ];

    return (
        <BaseForm
            options={rooms}
            input={props.roomInput}
            setInput={props.setRoomInput}
            headerTitle='Which room?'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );

}