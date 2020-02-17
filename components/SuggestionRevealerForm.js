import React, { useState } from 'react';

import BaseForm from './BaseForm.js';
import Loading from '../components/Loading.js'
import * as FS from 'expo-file-system';

export default function SuggestionRevealerForm(props) {
    
    const [playersLoaded, setPlayersLoaded] = useState(false);

    const [players, setPlayers] = useState(null);

    function getWorkingSave() {
        return new Promise((resolve, reject) => {
            console.log('[BEGIN] Reading appState...');

            let msgSuccess = '[SUCCESS] Success getting working save.';
            let msgFailure = '[ERROR] Error getting working save.';
            let uri = FS.documentDirectory + 'appState.json';
            FS.readAsStringAsync(uri)
                .then((contents) => {
                    let appState = JSON.parse(contents);
                    console.log(msgSuccess);
                    resolve(appState.workingSave);
                })
                .catch(() => {
                    console.log(msgFailure);
                    reject();
                });
        });
    }

    async function getPlayers() {
        let file = await getWorkingSave();

        console.log(`[BEGIN] Reading working save "${file}"...`);

        let msgSuccess = 'Success';
        let msgFailure = 'Failure';
        let uri = FS.documentDirectory + file;
        FS.readAsStringAsync(uri)
            .then((contents) => {
                let save = JSON.parse(contents);
                let foo = addKeys(save.players);
                setPlayers(foo);
                setPlayersLoaded(true);
                console.log(msgSuccess);
            })
            .catch(() => {
                console.log(msgFailure);
            });
    }

    function addKeys(arr) {
        return arr.map((value, index) => (
            {
                key: index.toString(),
                name: value
            }
        ));
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