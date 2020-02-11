import React from 'react';

import BaseForm from './BaseForm.js';

export default function SuggestionRevealerForm(props) {

    const players = [
        {key: '1', name: 'Joel'},
        {key: '2', name: 'Bryan'},
        {key: '3', name: 'Me'},
        {key: '4', name: 'Dad'},
        {key: '5', name: 'Nobody'}
      ];

    return (
        <BaseForm
            options={players}
            input={props.revealerInput}
            setInput={props.setRevealerInput}
            headerTitle='Who revealed a card?'
            nextText='Process'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );

}