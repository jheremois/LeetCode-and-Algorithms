class mostWordsFound{
    constructor(){
        console.log('sentenceLen');
        this.mostWords(["alice and bob love leetcode","i think so too","this is great thanks very much"])
    }

    mostWords(sentences: string[]): number {
        let longerOne = 0

        sentences.map((sentence)=>{
            let sentenceLen = sentence.split(' ')

            sentenceLen.length > longerOne?
                 longerOne = sentenceLen.length
            :
                0
            
        })

        console.log(longerOne)


        return 0
    }
}

new mostWordsFound()