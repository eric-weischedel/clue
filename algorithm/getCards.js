import GameCards from '../assets/cards.js';

export function getCards() {
    let myCards = {
        suspects: [
            'Colonel Mustard',
            'Miss Scarlet',
            'Mrs. Peacock'
        ],
        weapons: [
            'Candlestick',
            'Wrench'
        ],
        rooms: [
            'Ball Room',
            'Billiard Room',
            'Study'
        ]
    };

    let cards       = GameCards;
    let suspects    = sortByP(setProbabilities(objectify(cards.suspects), myCards.suspects));
    let weapons     = sortByP(setProbabilities(objectify(cards.weapons), myCards.weapons));
    let rooms       = sortByP(setProbabilities(objectify(cards.rooms), myCards.rooms));

    return {
        suspects: suspects,
        weapons: weapons,
        rooms: rooms
    };
}

function objectify(arr) {
    return arr.map((value, index) => (
        {
            name: value,
            probability: null
        }
    ));
}

function setProbabilities(arr, myCards) {
    return arr.map(function(value, index) {
        let p = 0;
        if (!myCards.includes(value.name)) {
            p = 1 / (arr.length - myCards.length);
            p = Math.round(p * 100);
        }
        return {
            name: value.name,
            probability: p
        };
    });
}

function sortByP(arr) {
    return arr.sort(function(a, b) {
        return b.probability - a.probability;
    });
}