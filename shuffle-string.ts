// function restoreString(s: string, indices: number[]): string {
//     let resultStr = '';
//     for (let i = 0; i < indices.length; i++) {
//         for (let j = 0; j<=indices[i]; j++) {
//             if (j==indices[i]) {
//                 resultStr+=  s[indices[i]];
//                 console.log('i value is ' +i+' j value is ' +j+ ' resultStr is now ' + resultStr)
//             }
//         }
//     }
//     return resultStr;
// };
// console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))





function restoreString(s: string, indices: number[]): string {
    let resultArr:string[] = [];
    let resultStr:string = '';
    for (let i = 0; i < indices.length; i++) {
        let temp = indices[i];
        resultArr[temp] = s[i];
    }
    for (let i = 0; i < indices.length; i++) {
        resultStr += resultArr[i];
    }
    return resultStr;
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))
