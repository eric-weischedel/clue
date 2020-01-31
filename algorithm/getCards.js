function getRandomPct() {
    return Math.round(Math.pow(Math.random() * 2.1, 6));
}
  
function sortByP(arr) {
    return arr.sort(function(a, b) {
        return b.probability - a.probability;
    });
}
  
export function getCards() {
    return {
        suspects: sortByP([
            { key: '1', name: 'Col. Mustard', probability: getRandomPct() },
            { key: '2', name: 'Prof. Plum', probability: getRandomPct() },
            { key: '3', name: 'Mr. Green', probability: getRandomPct() },
            { key: '4', name: 'Mrs. Peacock', probability: getRandomPct() },
            { key: '5', name: 'Miss Scarlet', probability: getRandomPct() },
            { key: '6', name: 'Mrs. White', probability: getRandomPct() },
            { key: '7', name: 'Mme Rose', probability: getRandomPct() },
            { key: '8', name: 'Sgt. Gray', probability: getRandomPct() },
            { key: '9', name: 'M. Brunette', probability: getRandomPct() },
            { key: '10', name: 'Miss Peach', probability: getRandomPct() },
        ]),
        weapons: sortByP([
            { key: '1', name: 'Knife', probability: getRandomPct() },
            { key: '2', name: 'Candlestick', probability: getRandomPct() },
            { key: '3', name: 'Revolver', probability: getRandomPct() },
            { key: '4', name: 'Rope', probability: getRandomPct() },
            { key: '5', name: 'Lead Pipe', probability: getRandomPct() },
            { key: '6', name: 'Wrench', probability: getRandomPct() },
            { key: '7', name: 'Poison', probability: getRandomPct() },
            { key: '8', name: 'Horseshoe', probability: getRandomPct() },
        ]),
        rooms: sortByP([
            { key: '1', name: 'Courtyard', probability: getRandomPct() },
            { key: '2', name: 'Gazebo', probability: getRandomPct() },
            { key: '3', name: 'Drawing Room', probability: getRandomPct() },
            { key: '4', name: 'Dining Room', probability: getRandomPct() },
            { key: '5', name: 'Kitchen', probability: getRandomPct() },
            { key: '6', name: 'Carriage House', probability: getRandomPct() },
            { key: '7', name: 'Trophy Room', probability: getRandomPct() },
            { key: '8', name: 'Conservatory', probability: getRandomPct() },
            { key: '9', name: 'Studio', probability: getRandomPct() },
            { key: '10', name: 'Billiard Room', probability: getRandomPct() },
            { key: '11', name: 'Library', probability: getRandomPct() },
            { key: '12', name: 'Fountain', probability: getRandomPct() },
        ])
    };
}