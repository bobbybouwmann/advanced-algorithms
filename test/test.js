var partition = require('./../app')();
var assert = require('assert');

describe('Partition', function() {

    it('#partition(1)', function() {
        assert.deepEqual(partition.partition(1), [[1]]);
    });

    it('#partition(2)', function() {
        assert.deepEqual(partition.partition(2), [[2], [1, 1]]);
    });

    it('#partition(5)', function() {
        assert.deepEqual(partition.partition(5), [[5], [4, 1], [3, 1, 1], [3, 2], [2, 1, 1, 1], [2, 2, 1], [1, 1, 1, 1, 1]]);
    });

    it('#partition(7)', function() {
        assert.deepEqual(partition.partition(7), [[7], [6, 1], [5, 1, 1], [5, 2], [4, 1, 1, 1], [4, 2, 1], [4, 3], [3, 1, 1, 1, 1], [3, 2, 2], [3, 2, 1, 1], [3, 3, 1], [2, 1, 1, 1, 1, 1], [2, 2, 2, 1], [2, 2, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]]);
    });

    it('#partition(12)', function() {
        assert.deepEqual(partition.partition(12), [[12], [11, 1], [10, 1, 1], [10, 2], [9, 1, 1, 1], [9, 2, 1], [9, 3], [8, 1, 1, 1, 1], [8, 2, 2], [8, 2, 1, 1], [8, 3, 1], [8, 4], [7, 1, 1, 1, 1, 1], [7, 2, 2, 1], [7, 2, 1, 1, 1], [7, 3, 2], [7, 3, 1, 1], [7, 4, 1], [7, 5], [6, 1, 1, 1, 1, 1, 1], [6, 2, 2, 1, 1], [6, 2, 2, 2], [6, 2, 1, 1, 1, 1], [6, 3, 3], [6, 3, 2, 1], [6, 3, 1, 1, 1], [6, 4, 2], [6, 4, 1, 1], [6, 5, 1], [6, 6], [5, 1, 1, 1, 1, 1, 1, 1], [5, 2, 2, 1, 1, 1], [5, 2, 2, 2, 1], [5, 2, 1, 1, 1, 1, 1], [5, 3, 3, 1], [5, 3, 2, 1, 1], [5, 3, 2, 2], [5, 3, 1, 1, 1, 1], [5, 4, 3], [5, 4, 2, 1], [5, 4, 1, 1, 1], [5, 5, 2], [5, 5, 1, 1], [4, 1, 1, 1, 1, 1, 1, 1, 1], [4, 2, 2, 1, 1, 1, 1], [4, 2, 2, 2, 2], [4, 2, 2, 2, 1, 1], [4, 2, 1, 1, 1, 1, 1, 1], [4, 3, 3, 1, 1], [4, 3, 3, 2], [4, 3, 2, 1, 1, 1], [4, 3, 2, 2, 1], [4, 3, 1, 1, 1, 1, 1], [4, 4, 4], [4, 4, 3, 1], [4, 4, 2, 1, 1], [4, 4, 2, 2], [4, 4, 1, 1, 1, 1], [3, 1, 1, 1, 1, 1, 1, 1, 1, 1], [3, 2, 2, 1, 1, 1, 1, 1], [3, 2, 2, 2, 2, 1], [3, 2, 2, 2, 1, 1, 1], [3, 2, 1, 1, 1, 1, 1, 1, 1], [3, 3, 3, 1, 1, 1], [3, 3, 3, 2, 1], [3, 3, 3, 3], [3, 3, 2, 1, 1, 1, 1], [3, 3, 2, 2, 2], [3, 3, 2, 2, 1, 1], [3, 3, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 1, 1], [2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 1, 1, 1, 1], [2, 2, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]);
    });

    it('#checkSumOfEachPartition(2)', function() {
        checkSumOfEachPartition(2);
    });

    it('#checkSumOfEachPartition(6)', function() {
        checkSumOfEachPartition(6);
    });

    it('#checkSumOfEachPartition(9)', function() {
        checkSumOfEachPartition(9);
    });

    it('#checkSumOfEachPartition(12)', function() {
        checkSumOfEachPartition(12);
    });

});

function checkSumOfEachPartition(number) {
    partition.partition(number).forEach(function(part) {
        var expected = part.reduce(function(a, b) {
            return a + b;
        });

        assert.equal(number, expected);
    });
}
