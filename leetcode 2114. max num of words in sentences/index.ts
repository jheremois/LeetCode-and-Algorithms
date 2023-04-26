function MstWordsFound(sentences: string[]){
    var longest: any = 1

    for(let i = 0; i < sentences.length; i++){
        let words: number = 1
        var sentencesList = sentences[i].split('').length

        for (let index = 0; index < sentencesList; index++) {
            if(sentences[i].split('')[index] == ' '){
                words = words + 1
            }
        }
        if(words > longest){
            longest = words
        }
    }

    return longest
};
var testCases: string[] = ["ali ce and bob lo ve le e tc ode","i think so too","this is great thanks very much"]
console.log(MstWordsFound(testCases));
