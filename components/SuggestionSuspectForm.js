import React from 'react';

import BaseForm from './BaseForm.js';

export default function SuggestionSuspectForm(props) {

    const suspects = [
        {key: '1', name: 'Col. Mustard'},
        {key: '2', name: 'Miss White'},
        {key: '3', name: 'Miss Scarlet'},
        {key: '4', name: 'Lebanon Levi'},
        {key: '5', name: 'Lebanon Eli'},
        {key: '6', name: 'The Ex Amish'},
    ];

    return (
        <BaseForm
            options={suspects}
            input={props.suspectInput}
            setInput={props.setSuspectInput}
            headerTitle='Which suspect?'
            handleNext={props.handleNext}
            handleBack={props.handleBack}
        />
    );
    
}