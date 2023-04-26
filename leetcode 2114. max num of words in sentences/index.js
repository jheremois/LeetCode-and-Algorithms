"use strict";
function MostWordsFound(sentences) {
    var longest = 1;
    for (var i = 0; i < sentences.length; i++) {
        var words = 1;
        var sentencesList = sentences[i].split('').length;
        for (var index = 0; index < sentencesList; index++) {
            if (sentences[i].split('')[index] == ' ') {
                words = words + 1;
            }
        }
        if (words > longest) {
            longest = words;
        }
    }
    return longest;
}
;
var testCases = ["ali ce and bob lo ve le e tc ode", "i think so too", "this is great thanks very much"];
console.log(MostWordsFound(testCases));
