function mostWordsFound(sentences: string[]): number {
    let maxWordSoFar: number = 0;
    for(let i = 0; i<sentences.length; i++) {
        let wordsInSentence: number = 0;
        for(let j = 0; j<sentences[i].length; j++) {
            if(sentences[i][j] == ' '){
                wordsInSentence++;
            }
        }
        wordsInSentence++;
        if(wordsInSentence> maxWordSoFar){
            maxWordSoFar = wordsInSentence;
        }
    }
return maxWordSoFar;
};


console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));






// function mostWordsFound(sentences: string[]): number {
//     let maxWordSoFar: number = 0;
//     for(let i = 0; i<sentences.length; i++) {
//         let wordsInSentence: number = 0;
//         for(let j = 0; j<sentences[i].length; j++) {
//             if(sentences[i][j] == ' '){
//                 wordsInSentence++;
//             }
//         }
//         wordsInSentence++;
//         if(wordsInSentence> maxWordSoFar){
//             maxWordSoFar = wordsInSentence;
//         }
//     }
//     return maxWordSoFar;
// };
//
//
// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
