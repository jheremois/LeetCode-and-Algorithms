/* 
sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */

 var testCase = [
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much"
]

 var mostWordsFound = function(sentences) {
    var sentencesLength = 0

    sentences.map((word, index)=>{
        var sentenceSeparated = word.split(' ')
        if (sentenceSeparated.length > sentencesLength) {
            sentencesLength = sentenceSeparated.length
        }
    })

    console.log(sentencesLength)
};


mostWordsFound(testCase)