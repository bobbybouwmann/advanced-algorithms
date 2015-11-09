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
        return 1;
    }

    var possibilies = [];
    for (var i = number; i > 0; i--) {
        for (var j = 1; j < number-i+1 && j <= i; j++) {
            // Starting point of each combination is always i
            var entry = [i, j];

            while (entry.reduce(function(a, b){return a+b;}) != number) {
                entry.push(1);
            }
            possibilies.push(entry);
        }
    }
    return possibilies;
}

console.log(getPartitions(5));
