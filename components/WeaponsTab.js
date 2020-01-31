import React from 'react';

import BasicTab from './BasicTab.js';

export default function WeaponsTab(props) {
    return <BasicTab cards={props.screenProps.weapons}/>
}