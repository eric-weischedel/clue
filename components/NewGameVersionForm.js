import React from 'react';

import BaseForm from './BaseForm.js';

export default function NewGameVersionForm(props) {

    const versions = [
        {key: '1', name: 'Clue (Original)'},
        {key: '2', name: 'Clue: Discover the Secrets'},
        {key: '3', name: 'Clue: Master Detective'},
        {key: '4', name: 'Clue (2016, Dr. Orchid)'},
      ];

    return (
        <BaseForm
            options={versions}
            input={props.versionInput}
            setInput={props.setVersionInput}
            headerTitle='Which version of the game?'
            handleNext={props.handleNext}
        />
    );

}