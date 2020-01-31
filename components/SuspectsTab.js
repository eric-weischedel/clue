import React from 'react';

import BasicTab from './BasicTab.js';

export default function SuspectsTab(props) {
    return <BasicTab cards={props.screenProps.suspects}/>
}