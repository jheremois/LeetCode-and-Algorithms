"use strict";
var mostWordsFound = /** @class */ (function () {
    function mostWordsFound() {
        console.log('sentenceLen');
        this.mostWords(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
    }
    mostWordsFound.prototype.mostWords = function (sentences) {
        var longerOne = 0;
        sentences.map(function (sentence) {
            var sentenceLen = sentence.split(' ');
            sentenceLen.length > longerOne ?
                longerOne = sentenceLen.length
                :
                    0;
        });
        console.log(longerOne);
        return 0;
    };
    return mostWordsFound;
}());
new mostWordsFound();
