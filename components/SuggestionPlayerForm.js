import React, { useState } from 'react';

import BaseForm from './BaseForm.js';
import Loading from '../components/Loading.js'
import { readWorkingSave, addKeys } from '../global/FileSystem.js';

export default function SuggestionPlayerForm(props) {

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
        getPlayers();
        return (
            <Loading />
        );
    }

}