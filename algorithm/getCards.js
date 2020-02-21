import GameCards from '../assets/cards.js';


export function getCards() {
    let cards = GameCards;
    let suspects = sortByP(addKeysAndProbabilities(cards.suspects));
    let weapons = sortByP(addKeysAndProbabilities(cards.weapons));
    let rooms = sortByP(addKeysAndProbabilities(cards.rooms));
    return {
        suspects: suspects,
        weapons: weapons,
        rooms: rooms
    }
}

/* HELPER FUNCTIONS */

function getPct(arr) {
    return Math.round((1 / arr.length) * 100);
}
  
function sortByP(arr) {
    return arr.sort(function(a, b) {
        return b.probability - a.probability;
    });
}

function addKeysAndProbabilities(arr) {
    return arr.map((value, index) => (
        {
            key: index.toString(),
            name: value,
            probability: getPct(arr)
        }
    ));
}