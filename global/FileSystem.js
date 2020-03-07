import * as FS from 'expo-file-system';

export function readFileAsync(fileName) {
    return new Promise((resolve, reject) => {
    console.log(`[BEGIN] Reading file "${fileName}"...`)

    let msgSuccess = `[SUCCESS] Success reading "${fileName}".`;
    let msgFailure = `[ERROR] Failure reading "${fileName}".`;
    let uri = FS.documentDirectory + fileName;

    FS.readAsStringAsync(uri)
        .then((contents) => {
            console.log(msgSuccess);
            resolve(contents);
        })
        .catch(() => {
            console.log(msgFailure);
            reject();
        });
    });
}

export function getWorkingSaveAsync() {
    return new Promise((resolve, reject) => {
        console.log('[BEGIN] Reading appState to get working save...');

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

export async function readWorkingSaveAsync() {
    return new Promise( async (resolve, reject) => {
        console.log('[BEGIN] Reading working save...');

        let workingSave = await getWorkingSaveAsync();
        let contents = await readFileAsync(workingSave);

        if (contents) {
            resolve(contents);
        } else {
            reject();
        }
    });
}

export function addKeys(arr) {
    return arr.map((value, index) => (
        {
            key: index.toString(),
            name: value
        }
    ));
}