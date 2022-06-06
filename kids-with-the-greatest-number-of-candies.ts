
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let resultArr: boolean[] = [];
    let maxCandie: number = 0;
     maxCandie = Math.max(...candies);
    for (let i = 0; i < candies.length; i++){
        let totalCandieOfEachKid = candies[i]+ extraCandies;
        if (totalCandieOfEachKid >= maxCandie) {
            resultArr.push(true)
        }
        else {
            resultArr.push(false)
        }
    }
    return resultArr;
};


console.log(kidsWithCandies([2,3,5,1,3],3))
