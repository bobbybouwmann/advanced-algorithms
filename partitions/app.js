// for each number,
// find the possible combinations that can be found
// ie
//  5: 4 + 1
//  5: 3 + 1 + 1
//  5: 3 + 2
//  5: 2 + 1 + 2
//  5: 2 + 1 + 1 +1
//  5: 2 + 3
//  5: 1 + 1 + 1 + 1 + 1
function getPartitions(number) {
    if (number == 1) {
        return [[1]];
    }

    var possibilies = [[number]];
    for (var i = number; i > 0; i--) {
        // loop over every possible combination (number - i + 1)
        // Excluding any dublicates ( j <= i )
        for (var j = 1; j < number-i+1 && j <= i; j++) {

            if (i + j != number && (number - i -j) >= j) {
                var remaining = getPartitions(number - i -j); // break up the remaining into partitions and append those to our entry
                remaining.forEach(function(element) {
                    var entry = [i, j]; // Starting point of each combination is always i followed by the value of j
                    // Add the remaining partitions to our entries
                    element.forEach(function(part) {
                        entry.push(part);
                    })
                    possibilies.push(entry);
                });
            } else {
                possibilies.push([i, j]); // Starting point of each combination is always i followed by the value of j
            }
        }
    }
    return possibilies;
}

/*
    Prints:

*/

module.exports = function() {
    return {
        getPartitions: getPartitions
    }
}

console.log(getPartitions(7));
