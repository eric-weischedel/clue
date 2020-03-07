import React, { useState } from 'react';

import BaseForm from './BaseForm.js';
import Loading from '../components/Loading.js'
import { addKeys } from '../global/FileSystem.js';

export default function SuggestionPlayerForm(props) {

    const [players, setPlayers] = useState(null);

    function loadPlayers() {
        let p = [...props.players];
        p.push('Me');
        setPlayers(addKeys(p));
    }

    if (players) {
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
    } else {
        loadPlayers();
        return (
            <Loading />
        );
    }

}