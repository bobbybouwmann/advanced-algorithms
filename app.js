function getPartitions(number) {
    // Start with the first number, we always have this one
    var possibilies = [[number]];

    for (var i = number; i > 0 && number > 1; i--) {

        // loop over every possible combination (number - i + 1)
        // Excluding any dublicates ( j <= i )
        for (var j = 1; j < number - i + 1 && j <= i; j++) {
            if (i + j != number) {
                // break up the remaining into partitions
                var remaining = getPartitions(number - i - j);

                // append the remaining partitions to the entry
                remaining.forEach(function(element) {
                    // Starting point of each combination is always i followed by the value of j
                    var entry = [i, j];

                    // Add the remaining partitions to our entries
                    element.forEach(function(part) {
                        entry.push(part);
                    });

                    if (entry[2] <= entry[1]) {
                        possibilies.push(entry);
                    }
                });
            } else {
                // Starting point of each combination is always i followed by the value of j
                possibilies.push([i, j]);
            }
        }
    }

    return possibilies;
}

module.exports = function() {
    return {
        partition: getPartitions
    }
}
