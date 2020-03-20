import * as FS from 'expo-file-system';

// LOGGING HELPERS
function logBegin(action) {
    console.log('BEGIN ' + action + '...');
}
function logSuccess(action) {
    console.log('SUCCESS ' + action);
}
function logFailure(action) {
    console.log('FAILURE ' + action);
}

// READS
export function readFileAsync(fileName) {
    return new Promise((resolve, reject) => {

        let action = `Reading file "${fileName}"`;
        logBegin(action);

        let uri = FS.documentDirectory + fileName;

        FS.readAsStringAsync(uri)
            .then((contents) => {
                logSuccess(action);
                resolve(contents);
            })
            .catch((error) => {
                logFailure(action);
                reject(null);
            });
    });
}

export function readAppStateAsync() {
    return new Promise(async(resolve, reject) => {

        let action = 'Reading app state';
        logBegin(action);

        let appState = await readFileAsync('appState.json');
        
        if (appState !== null) {
            logSuccess(action);
            resolve(JSON.parse(appState));
        } else {
            logFailure(action);
            reject(null);
        }
    });
}

export function getWorkingSaveAsync() {
    return new Promise(async(resolve, reject) => {

        let action = 'Getting working save filename';
        logBegin(action);

        let appState = await readAppStateAsync();

        if (appState !== null) {
            logSuccess(action);
            resolve(appState.workingSave);
        } else {
            logFailure(action);
            reject(null);
        }
    });
}

export function readWorkingSaveAsync() {
    return new Promise( async (resolve, reject) => {

        let action = 'Reading working save';
        logBegin(action);

        let workingSave = await getWorkingSaveAsync();
        let contents = await readFileAsync(workingSave);

        if (contents !== null) {
            logSuccess(action);
            resolve(contents);
        } else {
            logFailure(action);
            reject(null);
        }
    });
}

export function readDirectoryAsync() {
    return new Promise((resolve, reject) => {

        let action = 'Reading document directory';
        logBegin(action);

        let uri = FS.documentDirectory;
        
        FS.readDirectoryAsync(uri)
            .then((contents) => {
                logSuccess(action);
                resolve(contents);
            })
            .catch(() => {
                logFailure(action);
                reject(null);
            });
    })
}


export function addKeys(arr) {
    return arr.map((value, index) => (
        {
            key: index.toString(),
            name: value
        }
    ));
}
