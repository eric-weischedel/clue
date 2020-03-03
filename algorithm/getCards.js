import GameCards from '../assets/cards.js';
import { readWorkingSave } from '../global/FileSystem.js';

class ProbabilitiesMap {

    cards;
    myCards;
    ruledOut;
    map;

    constructor(cards, myCards) {
        this.cards = cards;
        this.myCards = myCards;
        this.ruledOut = 0;
        this.objectify();
        this.ruleOutMyCards();
        this.setNonZeroCards();
    }

    getMap() {
        return this.map.sort(function(a, b) {
            return b.probability - a.probability;
        });;
    }

    objectify() {
        this.map = this.cards.map(value => (
            {
                name: value,
                probability: null
            }
        ));
    }

    ruleOutMyCards() {
        var vm = this;
        this.map = this.map.map(function(value) {
            if (vm.myCards.includes(value.name)) {
                vm.ruledOut ++;
                return {
                    name: value.name,
                    probability: 0
                };
            } else { return value; }
        });
    }

    setNonZeroCards() {
        var vm = this;
        this.map = this.map.map(function(value) {
            let p = 0;
            if (value.probability === null) {
                p = 1 / (vm.map.length - vm.ruledOut);
                p = Math.round(p * 100);
            }
            return {
                name: value.name,
                probability: p
            };
        });
    }
}

export async function getCardsAsync() {
    let file = await readWorkingSave();
    let save = JSON.parse(file);
    let myCards = save.myCards;

    let cards = GameCards;

    let suspects = new ProbabilitiesMap(cards.suspects, myCards.suspects);
    let weapons = new ProbabilitiesMap(cards.weapons, myCards.weapons);
    let rooms = new ProbabilitiesMap(cards.rooms, myCards.rooms);

    return {
        suspects: suspects.getMap(),
        weapons: weapons.getMap(),
        rooms: rooms.getMap()
    };

}