import React from 'react';

import BasicTab from './BasicTab.js';

export default function RoomsTab(props) {
    return <BasicTab cards={props.screenProps.rooms}/>
}