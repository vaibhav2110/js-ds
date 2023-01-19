var reconstructQueue = function(people) {
    let sortedPeople = people.sort((a, b) => (b[0] - a[0]) === 0 ? a[1] - b[1] : b[0] - a[0]);
    let reconstructedQueue = [];
    sortedPeople.forEach(people => {
        let tallerPeople = people[1];
        reconstructedQueue.splice(tallerPeople, 0, people);
    });
};

module.exports = () => reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);