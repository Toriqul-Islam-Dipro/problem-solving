function shuffle(nums: number[], n: number): number[] {
    let finalShuffleArray:number[] = [];
    for(let i=0; i<n; i++){
        finalShuffleArray.push(nums[i]);
        for (let j=n+i; j<n*2; j++){
            finalShuffleArray.push(nums[j]);
            break;
        }
    }

    return finalShuffleArray;
};


console.log(shuffle([1,2,3,4,4,3,2,1],4));
