import React, { useState } from 'react';

import BaseForm from './BaseForm.js';
import Loading from '../components/Loading.js'
import { readWorkingSave, addKeys } from '../global/FileSystem.js';

export default function SuggestionRevealerForm(props) {

    const [playersLoaded, setPlayersLoaded] = useState(false);
    const [players, setPlayers] = useState(null);

    async function getPlayers() {
        let save = await readWorkingSave();
        save = JSON.parse(save);
        let players = addKeys(save.players);
        setPlayers(players);
        setPlayersLoaded(true);
    }

    if (playersLoaded) {
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
        getPlayers();
        return (
            <Loading />
        );
    }

}