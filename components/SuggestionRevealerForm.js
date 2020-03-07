import React, { useState } from 'react';

import BaseForm from './BaseForm.js';
import Loading from '../components/Loading.js'
import { addKeys } from '../global/FileSystem.js';

export default function SuggestionRevealerForm(props) {

    const [players, setPlayers] = useState(null);

    function loadPlayers() {
        let p = [...props.players];
        p.push('Me', 'Nobody');
        setPlayers(addKeys(p));
    }

    if (players) {
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
    } else {
        loadPlayers();
        return (
            <Loading />
        );
    }

}