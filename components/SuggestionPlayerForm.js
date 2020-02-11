import React from 'react';

import BaseForm from './BaseForm.js';

export default function SuggestionPlayerForm(props) {

    const players = [
        {key: '1', name: 'Joel'},
        {key: '2', name: 'Bryan'},
        {key: '3', name: 'Me'},
        {key: '4', name: 'Dad'},
      ];

    return (
        <BaseForm
            options={players}
            input={props.playerInput}
            setInput={props.setPlayerInput}
            headerTitle='Whose turn is it?'
            nextText='Suspect'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
            noBack={true}
        />
    );

}