"use strict";
/*
    given an un sorted arr return its sorted version

    example:
    A)
    input: [3, 9, 4, 2]
    output: [2, 3, 4, 9]

    B)
    input: [3, 2, 1]
    output: [1, 2, 3]
*/
var sortArr = /** @class */ (function () {
    function sortArr(unSortedArr) {
        this.unSortedArr = unSortedArr;
        this.sortedVersion = [];
        this.sortInputArr();
    }
    sortArr.prototype.sortInputArr = function () {
        var _this = this;
        this.unSortedArr.map(function (val) {
            var itsIndex = 0;
            _this.unSortedArr.map(function (innerVal) {
                if (val > innerVal) {
                    itsIndex = itsIndex + 1;
                }
            });
            _this.sortedVersion[itsIndex] = val;
        });
        return this.sortedVersion;
    };
    return sortArr;
}());
var testCase = [328, -12, 0.324, 3727, 12, 9, 731, 13, 73, 18, 34];
var sort = new sortArr(testCase);
console.log(sort.sortInputArr());
